import { useRef, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsEye } from 'react-icons/bs'
import { RxEyeClosed } from 'react-icons/rx'

import FormGroup from '@/components/FormGroup'
import { Input } from '@/components/Input'
import Button from '@/components/Button'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

interface FormValues {
  email: string
  password: string
}

const Login = () => {
  const [eye, setEye] = useState(false)
  const [viewPassword, setViewPassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const routes = useRouter()
  const { push, query } = routes

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const { ...restEmail } = register('email', {
    required: true
  })

  const { ref, ...rest } = register('password', {
    required: true,
    minLength: 8
  })

  const errorsPassword =
    errors?.password?.type === 'required'
      ? 'Senha é obrigatório'
      : 'A senha precisa ter no mínimo 8 caracteres.'

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)

    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: `${
        query?.callbackUrl
          ? window.location.origin + '' + query?.callbackUrl
          : window.location.origin + '/dashboard'
      }`
    })

    if (result?.url) {
      toast.success('Login realizado com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })

      return push(result?.url)
    }

    setIsLoading(false)

    if (result?.error) {
      toast.error(result?.error, {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
    }
  }

  const handleViewPassword = () => {
    setEye(!eye)
    if (passwordRef.current?.type === 'password') {
      setViewPassword('text')
    } else {
      setViewPassword('password')
    }
  }

  return (
    <S.Container>
      <S.LineBg />

      <S.FormContainer>
        <S.Form>
          <S.Header>
            <h1>Entrar</h1>
            <span>Digite seu e-mail e senha para entrar!</span>
          </S.Header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup
              label="Email"
              required
              error={errors?.email && 'Por favor digite um email válido.'}
            >
              <Input
                type="email"
                {...restEmail}
                placeholder="email@exemplo.com.br"
              />
            </FormGroup>

            <FormGroup
              label="Password"
              required
              password
              error={errors?.password && errorsPassword}
            >
              <div>
                <input
                  type={viewPassword}
                  {...rest}
                  ref={(e) => {
                    ref(e)
                    passwordRef.current = e
                  }}
                  className="input-password"
                  placeholder="Min. 8 caracteres"
                />

                <button type="button" onClick={handleViewPassword}>
                  {eye ? <RxEyeClosed size={18} /> : <BsEye size={18} />}
                </button>
              </div>
            </FormGroup>

            <Button type="submit" disabled={isLoading} isLoading={isLoading}>
              Entrar
            </Button>
          </form>
        </S.Form>
      </S.FormContainer>

      <ToastContainer />
    </S.Container>
  )
}

export default Login
