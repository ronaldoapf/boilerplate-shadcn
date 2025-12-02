import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { InputForm } from "@/components/ui/input"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import type { ComponentProps } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: ComponentProps<"div">) {

  const form = useForm<LoginFormData, unknown, LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
  })


  const { handleSubmit } = form

  const onSubmit = handleSubmit(async (data: LoginFormData) => {
    console.log("Login data:", data)
  })

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={onSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <InputForm
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <InputForm name="password" id="password" type="password" placeholder="*******" required />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                  {/* <Button variant="outline" type="button">
                    Login with Google
                  </Button> */}
                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <a href="#">Sign up</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}
