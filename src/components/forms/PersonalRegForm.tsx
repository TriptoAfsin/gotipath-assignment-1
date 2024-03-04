"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRegister } from "@/hooks/api/useRegister";
import { setLocal } from "@/utils/storageUtils";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Label from "../Typography/Label";
import ResponsiveFlex from "../layout/ResponsiveFlex";

const FormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/(^(01){1}[3456789]{1}(\d){8})$/, "Invalid phone number"),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." }),
});

function PersonalRegForm() {
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
    },
  });

  const onSuccessFunc = (data: any) => {
    console.log("reg data", data);
    setLocal("user_info", data);
    toast({
      title: "Registration was successful 😁",
    });
    router.push("/dashboard");
  };

  const onErrorFunc = (error: any) => {
    console.error("login error", error);
    toast({
      title: "Registration failed 😢",
      variant: "destructive",
    });
  };

  const {
    mutate: registerMutate,
    isPending: registerLoading,
    isError: registerErr,
  } = useRegister(onSuccessFunc, onErrorFunc, queryClient);

  function onSubmit(data: any) {
    registerMutate({
      ...data,
      type: "personal",
      accept_terms_and_conditions: true,
      profession: "engineer",
      country: "BD",
      team_size: "10-50",
      company_name: "Gotipath",
    });
  }

  return (
    <>
      <Form {...form}>
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
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5">
                <FormLabel>Create Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter new password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={registerLoading}>
            {registerLoading ? "Please wait..." : "Register"}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default PersonalRegForm;
