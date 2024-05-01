import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6 ">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="tracking-tigh text-2xl font-semibold">
              Criar conta gratuita
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <input
                type="text"
                id="restaurantName"
                className="w-full rounded-lg border border-muted-foreground p-4"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <input
                type="text"
                id="managerName"
                className="w-full rounded-lg border border-muted-foreground p-4"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border border-muted-foreground p-4"
                {...register('email')}
              />
            </div>

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
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              {' '}
              Ao continuar, você concorda com nossos termos de serviço e
              políticas de privacidade.{' '}
            </p>
          </form>

          <Button variant="ghost" asChild>
            <Link to="/sign-in">Fazer login</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
