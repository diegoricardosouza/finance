import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import Button from '@/components/Button'
import FormGroup from '@/components/FormGroup'
import { Input } from '@/components/Input'
import { User } from '@prisma/client'
import { BsEye } from 'react-icons/bs'
import { RxEyeClosed } from 'react-icons/rx'
import Base from '../Base'
import * as S from './style'
import 'react-toastify/dist/ReactToastify.css'

interface FormValues {
  name: string
  email: string
  password: string
  role: string
}

const Profile = () => {
  const [user, setUser] = useState<User | null>()
  const { data: session } = useSession()
  const userLogged = session?.user as User
  const [eye, setEye] = useState(false)
  const [viewPassword, setViewPassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const getUserLogged = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user?id=${userLogged?.id}`
      )

      const data = await response.json()
      setUser(data)
    }

    getUserLogged()
  }, [userLogged?.id])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, defaultValues }
  } = useForm<FormValues>({
    defaultValues: {
      name: user?.name
    }
  })

  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('email', user.email)
    }
  }, [user, setValue])

  const { ...restName } = register('name', {
    required: true
  })

  const { ...restEmail } = register('email')

  const { ref, ...rest } = register('password', {
    minLength: 8
  })

  const handleViewPassword = () => {
    setEye(!eye)
    if (passwordRef.current?.type === 'password') {
      setViewPassword('text')
    } else {
      setViewPassword('password')
    }
  }

  const errorsPassword =
    errors?.password?.type === 'required'
      ? 'Senha é obrigatório'
      : 'A senha precisa ter no mínimo 8 caracteres.'

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true)

      let formData = {}

      if (data.password !== '') {
        formData = {
          name: data.name,
          email: user?.email,
          password: data.password
        }
      } else {
        formData = {
          name: data.name,
          email: user?.email
        }
      }

      console.log(formData)

      const id = user?.id
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id, ...formData })
        }
      )

      if (response.status === 201) {
        const resData = await response.json()
        toast.success('Usuário atualizado com sucesso!', {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
        setUser(resData)
      } else {
        toast.error('Erro ao atualizar os dados', {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
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

  return (
    <Base title="Perfil" titleBreadcrumb="Perfil">
      <S.ProfileContainer>
        <S.LeftContainer>
          <S.HeaderProfile>
            <S.ProfilePhoto>{user?.name.charAt(0)}</S.ProfilePhoto>

            <S.ProfileInfos>
              <S.ProfileTitle>{user?.name}</S.ProfileTitle>
              <S.ProfileEmail>{user?.email}</S.ProfileEmail>
            </S.ProfileInfos>
          </S.HeaderProfile>

          <S.FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup
                label="Nome"
                required
                error={errors?.name && 'Campo de preenchimento obrigatório.'}
              >
                <Input
                  type="text"
                  {...restName}
                  placeholder="Digite seu nome"
                  defaultValue={defaultValues?.name}
                />
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
                  defaultValue={user?.email}
                  readOnly
                />
              </FormGroup>

              <FormGroup
                label="Password"
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
                Atualizar perfil
              </Button>
            </form>
          </S.FormWrapper>
        </S.LeftContainer>
      </S.ProfileContainer>

      <ToastContainer />
    </Base>
  )
}

export default Profile
