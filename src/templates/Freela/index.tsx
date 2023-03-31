import { useEffect, useState } from 'react'
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

const list = [
  {
    id: 'sfasfasdfas',
    title: 'Freela dev2 Brde Mensal',
    value: 10.23,
    active: false
  },
  {
    id: '234214sfw',
    title: 'Freela dev2 Pontta',
    value: 1300.51,
    active: true
  },
  {
    id: 'asdaswe1e',
    title: 'Freela dev2 Hive Engenharia',
    value: 14.51,
    active: false
  },
  {
    id: '123r4r4',
    title: 'Freela dev2 Brde Calendário',
    value: 15.51,
    active: true
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
  const [listAll, setListAll] = useState<FreelaT[] | null>([])
  const [listPending, setListPending] = useState<FreelaT[] | null>([])

  const { data: session } = useSession()
  const userId: any = session?.user

  useEffect(() => {
    setListAll(list)
    setListPending(listAll?.filter((item) => item.active === false) || [])
  }, [listAll])

  console.log(listPending)

  const handleDelete = async (id: string) => {
    console.log('delete', id)
  }

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
        id: userId.id
      }

      console.log(formData)

      setIsLoading(false)
    } catch (error) {
      toast.error('Internal Server Error', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
      setIsLoading(false)
    }
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
