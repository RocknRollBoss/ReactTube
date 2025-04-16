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
import { useRegisterMutation } from "@/app/services/authApi"
import {  useNavigate } from "react-router-dom"
import { RoutesEnum } from "@/Routes"

const defaultAvatar =
  "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_640.png"
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 5 characters." }),
  avatar: z.string(),
})
export type RegisterType = z.infer<typeof formSchema>
export const Register: React.FC = () => {
  const navigate = useNavigate()
  const [register] = useRegisterMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: defaultAvatar,
    },
  })
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const data = await register(values).unwrap()
      if (data) {
        navigate(RoutesEnum.HOME)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Any Error")
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Title text="Register" size="md" className="mb-4 text-xl font-semibold" />
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="hidden" placeholder="avatar" {...field} />
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
    </div>
  )
}
