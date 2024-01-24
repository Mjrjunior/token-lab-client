import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Api from "../../services/api.service";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "E-email inválido.",
    })
    .email({
      message: "E-email inválido.",
    }),
  password: z.string().min(2, {
    message: "Senha inválida.",
  }),
});



export const LoginPage: React.FC = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await Api.post("/sessions", {email: data.email, password: data.password});
      const {access_token} = response.data;
      await localStorage.setItem("authToken", access_token);
      window.location.reload();
    } catch (error) {
       console.error(error);
    }
  };


    return (
      <div className="flex items-center justify-center h-screen w-screen">
      <Card className="w-[90%] md:w-[400px]">
        <CardHeader>
          <h1 className="font-bold text-3xl">Login</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage lang="pt-BR" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          // Remove spaces and convert to lowercase
                          const processedValue = e.target.value
                            .replace(/\s+/g, "")
                            .toLowerCase();
                          field.onChange(processedValue);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant='outline' type="submit" className="bg-slate-950 text-white">
                Entrar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
    )
}