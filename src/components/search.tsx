import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui"
import { Search as SearchLuc } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { RoutesEnum } from "@/Routes"

const formSchema = z.object({
  search: z.string(),
})
export const Search: React.FC = () => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (values.search) {
        navigate(`${RoutesEnum.SEARCH}/${values.search}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full max-w-sm items-center space-x-2 relative">
                  <Input
                    className="py-4 md:py-5 rounded-xl w-full"
                    placeholder="Search...
                      "
                    {...field}
                  />

                  <button type="submit" className="absolute right-4 md:right-5">
                    <SearchLuc className="w-3 h-3 md:w-5 md:h-5" />
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
