import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Link de autenticação enviado para seu e-mail.', {
        action: {
          label: 'Reenviar e-mail',
          onClick: () => handleSignIn(data), // Reenviar e-mail
        },
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="tracking-tigh text-2xl font-semibold">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-muted-foreground p-4"
                {...register('email')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit">
              Acessar painel
            </Button>
          </form>

          <Button variant="ghost" asChild>
            <Link to="/sign-up">Novo estabelecimento</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
