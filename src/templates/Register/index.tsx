import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { BsEye } from 'react-icons/bs'
import { RxEyeClosed } from 'react-icons/rx'

import FormGroup from '@/components/FormGroup'
import { Input } from '@/components/Input'
import Button from '@/components/Button'
import { SelectForm } from '@/components/SelectForm'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

interface FormValues {
  name: string
  email: string
  password: string
  role: string
}

const Register = () => {
  const [eye, setEye] = useState(false)
  const [viewPassword, setViewPassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const { ...restName } = register('name', {
    required: true
  })

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
    try {
      setIsLoading(true)

      const response = await fetch('api/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await response.json()

      if (resData.error) {
        toast.error(resData.error, {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
      } else {
        toast.success('Usuário criado com sucesso!', {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
        reset()
      }

      setIsLoading(false)
    } catch (err) {
      toast.error('Internal Server Error', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
      setIsLoading(false)
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
            <h1>Cadastre-se</h1>
            <span>Digite seu e-mail e senha para se cadastrar!</span>
          </S.Header>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup
              label="Nome"
              required
              error={errors?.name && 'Campo de preenchimento obrigatório.'}
            >
              <Input type="text" {...restName} placeholder="Digite seu nome" />
            </FormGroup>

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

            <FormGroup label="Função" required>
              <SelectForm {...register('role', { required: true })}>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </SelectForm>
            </FormGroup>

            <Button type="submit" disabled={isLoading} isLoading={isLoading}>
              Criar minha conta
            </Button>
          </form>
        </S.Form>
      </S.FormContainer>

      <ToastContainer />
    </S.Container>
  )
}

export default Register
