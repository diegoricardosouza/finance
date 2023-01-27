import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsEye } from 'react-icons/bs'
import { RxEyeClosed } from 'react-icons/rx'

import FormGroup from '@/components/FormGroup'
import { Input } from '@/components/Input'
import Button from '@/components/Button'

import * as S from './styles'

interface FormValues {
  email: string
  password: string
}

const Login = () => {
  const [eye, setEye] = useState(false)
  const [viewPassword, setViewPassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)
  const passwordRef = useRef<HTMLInputElement | null>(null)

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
    console.log(data)

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
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
    </S.Container>
  )
}

export default Login
