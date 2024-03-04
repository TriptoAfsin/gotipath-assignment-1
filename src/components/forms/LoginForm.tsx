"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useLogin } from "@/hooks/api/useLogin";
import { setLocal } from "@/utils/storageUtils";
import { checkPassString } from "@/utils/stringUtils";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-=_+{};':"|,.<>?]).*$/,
      "Invalid password"
    )
    .min(8, { message: "Password must be at least 8 characters." }),
});

function LoginForm() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSuccessFunc = (data: any) => {
    setLocal("user_info", data);
    toast({
      title: "Login successful 😁",
    });
    router.push("/dashboard");
  };

  const onErrorFunc = (error: any) => {
    toast({
      title: error?.response?.data?.message || "Login failed 😢",
      variant: "destructive",
    });
  };

  const {
    mutate: loginMutate,
    isPending: loginLoading,
    isError: loginErr,
  } = useLogin(onSuccessFunc, onErrorFunc, queryClient);

  function onSubmit(data: any) {
    const { hasUpperCase, hasLowerCase, hasSymbol, isAtleastMinChars } =
      checkPassString(data?.password, 8);
    if (hasUpperCase && hasLowerCase && hasSymbol && isAtleastMinChars) {
      loginMutate(data);
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-5">
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
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1.5 mb-5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me for 7 days
              </label>
            </div>
            <Link
              href="/auth/reset-password"
              className="text-sm font-medium text-primary"
            >
              Forgot Password?
            </Link>
          </div>
          <Button type="submit" className="w-full" disabled={loginLoading}>
            {loginLoading ? "Please wait..." : "Login"}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
