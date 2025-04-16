import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Title } from "@/components/ui"
import { Link, useNavigate } from "react-router-dom"
import { useLoginMutation } from "@/app/services/authApi"
import { RoutesEnum } from "@/Routes"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters." }),
})
export type LoginType = z.infer<typeof formSchema>
export const Login: React.FC = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const data = await login(values).unwrap()
      if (data) {
        navigate(RoutesEnum.HOME)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Any error")
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Title text="Login" size="md" className="mb-4 text-xl font-semibold" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <Link className="mt-4" to={RoutesEnum.REGISTER}>
        <Title
          className="text-blue-400 hover:opacity-50 duration-300"
          text="I don't have an account, Register"
          size="md"
        />
      </Link>
    </div>
  )
}
