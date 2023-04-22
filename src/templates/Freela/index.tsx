import { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { AiOutlinePlus } from 'react-icons/ai'

import Base from '../Base'
import { Input } from '@/components/Input'
import FormGroup from '@/components/FormGroup'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import TableCheckbox from '@/components/TableCheckbox'
import { convertMoney } from '@/utils/numberFormat'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const columns = [
  {
    title: '#',
    width: 90
  },
  {
    title: 'Título'
  },
  {
    title: 'Valor',
    width: 170
  }
]

interface FormValues {
  title: string
  value: string
}

interface FreelaT {
  id: string
  title: string
  value: number
  active: boolean
}

const Freela = () => {
  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<FreelaT[]>([])
  const [listAll, setListAll] = useState<FreelaT[] | null>([])
  const [listPending, setListPending] = useState<FreelaT[] | null>([])

  const { data: session } = useSession()
  const userId: any = session?.user

  const getFreelas = useCallback(async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/freela`
    )
    const resData = await response.json()

    setList(resData)
  }, [])

  useEffect(() => {
    getFreelas()
  }, [getFreelas])

  useEffect(() => {
    setListAll(list)
    setListPending(listAll?.filter((item) => item.active === false) || [])
  }, [list, listAll])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const handleCloseModal = () => {
    setOpenModal(!openModal)
    reset()
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true)

      const formData = {
        ...data,
        value: parseFloat(data.value.replace(/\./g, '').replace(',', '.')),
        id: userId.id,
        active: false
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/freela`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      )

      const resData = await response.json()

      if (resData.error) {
        toast.error(resData.error, {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
      } else {
        setLoading(true)
        toast.success('Freela criado com sucesso!', {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
        getFreelas()
        reset()
        setTimeout(() => {
          setOpenModal(false)
        }, 1000)
        setLoading(false)
      }

      setIsLoading(false)
    } catch (error) {
      toast.error('Internal Server Error', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/freela`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      setList((prevState) => prevState.filter((item) => item.id !== id))

      toast.success('Freela deletado com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
    } catch {
      toast.error('Ocorreu um erro ao deletar o freela', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
    }
  }

  const handleUpdate = async (id: string, checked: boolean) => {
    console.log('update', id)
    console.log('check', checked)

    const formData = {
      id,
      active: checked
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/freela`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  return (
    <Base title="Freelas" titleBreadcrumb="Freelas">
      <S.Container>
        {!loading && (
          <S.AddButton
            onClick={() => setOpenModal(true)}
            aria-label="Open modal"
          >
            <AiOutlinePlus size={20} />
          </S.AddButton>
        )}

        <TableCheckbox
          title="Lista dos Freelas"
          columns={columns}
          list={list}
          deleteButton
          onDelete={handleDelete}
          isLoading={loading}
          onUpdate={handleUpdate}
        />
      </S.Container>

      <Modal onClose={handleCloseModal} visible={openModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            label="Título"
            required
            error={errors?.title && 'Campo de preenchimento obrigatório.'}
          >
            <Input
              type="text"
              placeholder="Título"
              {...register('title', { required: true })}
            />
          </FormGroup>

          <FormGroup
            label="Valor"
            required
            error={errors?.value && 'Campo de preenchimento obrigatório.'}
          >
            <Input
              type="text"
              min={0}
              placeholder="ex.: 99.99"
              {...register('value', { required: true, value: '0.00' })}
              onChange={(e) => convertMoney(e)}
            />
          </FormGroup>

          <Button type="submit" disabled={isLoading} isLoading={isLoading}>
            Enviar
          </Button>
        </form>
      </Modal>

      <ToastContainer />
    </Base>
  )
}

export default Freela
