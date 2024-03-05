"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

import Label from "@/components/Typography/Label";
import ResponsiveFlex from "@/components/layout/ResponsiveFlex";
import { Button } from "@/components/ui/button";

import PasswordCheck from "@/components/misc/PasswordCheck";
import Combobox from "@/components/ui/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { toast } from "@/components/ui/use-toast";
import {
  COUNTRY_MENU_LIST,
  PROFESSION_MENU_LIST,
  TEAM_SIZE_MENU_LIST,
} from "@/constants/menuList";
import { useRegister } from "@/hooks/api/useRegister";
import { setLocal } from "@/utils/storageUtils";
import { checkPassString } from "@/utils/stringUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email(),
  phone: z
    .string()
    .regex(
      /(^(01){1}[3456789]{1}(\d){8})$/,
      "Invalid phone number(e.g 017xxxxxxxx)"
    ),
  profession: z.string().min(1, "Profession is required"),
  team_size: z.string().min(1, "Team size is required"),
  country: z.string().min(1, "Country is required"),
  company_name: z.string().min(1, { message: "Organization name is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function CorporateRegForm() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
      profession: "",
    },
  });

  const passToCheck = useWatch({ name: "password", control: form?.control });

  const onSuccessFunc = (data: any) => {
    setLocal("user_info", data);
    toast({
      title: "Registration was successful 😁",
    });
    router.push("/dashboard");
  };

  const onErrorFunc = (error: any) => {
    toast({
      title:
        error?.response?.data?.details &&
        !Array.isArray(error?.response?.data?.details)
          ? error?.response?.data?.details
          : error?.response?.data?.message
          ? error?.response?.data?.message
          : "Registration failed 😢",
      variant: "destructive",
    });
  };

  const {
    mutate: registerMutate,
    isPending: registerLoading,
    isError: registerErr,
  } = useRegister(onSuccessFunc, onErrorFunc, queryClient);

  function onSubmit(data: any) {
    const { hasUpperCase, hasLowerCase, hasSymbol, isAtleastMinChars } =
      checkPassString(data?.password, 8);
    if (hasUpperCase && hasLowerCase && hasSymbol && isAtleastMinChars) {
      registerMutate({
        ...data,
        type: "bussiness",
        accept_terms_and_conditions: true,
      });
    } else {
      toast({
        title: "Invalid password",
        variant: "destructive",
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem className="space-y-1.5 mb-5">
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input placeholder="Organization Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="team_size"
          render={({ field }) => (
            <FormItem className="space-y-1.5 mb-5 flex flex-col">
              <FormLabel>Team Size</FormLabel>
              <FormControl>
                <Combobox
                  data={TEAM_SIZE_MENU_LIST}
                  placeholder="Your team size"
                  fieldName="team_size"
                  setFormValue={form?.setValue}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5">
          <div>
            <Label>Name</Label>
            <ResponsiveFlex>
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="space-y-1.5 mb-5 mr-2">
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="space-y-1.5 mb-5">
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ResponsiveFlex>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
                    {...field}
                    type="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5 flex flex-col">
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Combobox
                    data={PROFESSION_MENU_LIST}
                    placeholder="Your profession"
                    fieldName="profession"
                    setFormValue={form?.setValue}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5 flex flex-col">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Combobox
                    data={COUNTRY_MENU_LIST}
                    placeholder="Your country"
                    fieldName="country"
                    setFormValue={form?.setValue}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5">
                <FormLabel>Create Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Enter new password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {passToCheck && (
            <div className="py-3">
              <PasswordCheck
                password={passToCheck}
                minChars={8}
                key={passToCheck}
              />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={registerLoading}>
            {registerLoading ? "Please wait..." : "Register"}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default CorporateRegForm;
