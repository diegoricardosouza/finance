/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi'
import { AiOutlinePlus } from 'react-icons/ai'

import Base from '../Base'
import Card from '@/components/Card'
import Table from '@/components/Table'
import SelectedData from '@/components/SelectedData'
import Modal from '@/components/Modal'
import FormGroup from '@/components/FormGroup'
import { Input } from '@/components/Input'
import Button from '@/components/Button'
import { SelectForm } from '@/components/SelectForm'
import { Item } from '@prisma/client'
import {
  currentMonthExt,
  getCurrentDateNow,
  getCurrentMonth
} from '@/utils/dateFilter'
import { categories } from '@/data/categories'
import { convertMoney } from '@/utils/numberFormat'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

const columns = [
  {
    title: 'Data',
    width: 170
  },
  {
    title: 'Categoria',
    width: 170
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
  date: string
  category: string
  title: string
  value: string
}

const Finance = () => {
  const [list, setList] = useState<any>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [openModal, setOpenModal] = useState(false)
  const [inputDate, setInputDate] = useState(getCurrentDateNow())
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const balance = income - expense

  const { data: session } = useSession()
  const userId: any = session?.user

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  const date = useMemo(() => {
    return new Date()
  }, [])

  useEffect(() => {
    setSelectedMonth((prevState) =>
      prevState === '' ? currentMonthExt() : prevState
    )
    setSelectedYear((prevState) =>
      prevState === '' ? String(date.getFullYear()) : prevState
    )

    setCurrentMonth(`${selectedYear}-${selectedMonth}`)
  }, [selectedMonth, selectedYear, date])

  const getItensByDate = useCallback(async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/item?date=${currentMonth}`
    )
    const resData = await response.json()
    setList(resData)
  }, [currentMonth])

  useEffect(() => {
    if (currentMonth !== '-') {
      getItensByDate()
    }
  }, [currentMonth, getItensByDate])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (const i in list) {
      if (categories[list[i].category].expense) {
        expenseCount += list[i].value
      } else {
        incomeCount += list[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [list])

  const handleFilter = ({ month, year }: { month: string; year: string }) => {
    setSelectedMonth(month === '' ? currentMonthExt() : month)
    setSelectedYear(year === '' ? String(date.getFullYear()) : year)
  }

  const handleCloseModal = () => {
    setOpenModal(!openModal)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true)

      const formData = {
        ...data,
        value: parseFloat(data.value.replace(/\./g, '').replace(',', '.')),
        id: userId.id
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/item`,
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
        toast.success('Item criado com sucesso!', {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'dark'
        })
        getItensByDate()
        reset()
        setTimeout(() => {
          setOpenModal(false)
        }, 1000)
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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/item`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      setList((prevState: Item[]) => prevState.filter((item) => item.id !== id))

      toast.success('Item deletado com sucesso!', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
    } catch {
      toast.error('Ocorreu um erro ao deletar o item', {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: 'dark'
      })
    }
  }

  return (
    <Base title="Dashboard" titleBreadcrumb="Dashboard">
      <S.Container>
        <Card
          icon={<GiMoneyStack size={30} />}
          title="Receita"
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(income)}
          color="white"
        />

        <Card
          icon={<GiTakeMyMoney size={30} />}
          title="Despesa"
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(expense)}
          color="white"
        />

        <Card
          icon={<MdOutlineAttachMoney size={30} />}
          title="Balanço"
          subtitle={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2
          }).format(balance)}
          color={balance < 0 ? 'red' : balance > 1 ? 'green' : 'white'}
        />

        <SelectedData onButtonClick={handleFilter} />
      </S.Container>

      <S.WrapperTable>
        <S.AddButton onClick={() => setOpenModal(true)} aria-label="Open modal">
          <AiOutlinePlus size={20} />
        </S.AddButton>

        <Table
          title="Tabela de Finanças"
          columns={columns}
          list={list}
          deleteButton
          onDelete={handleDelete}
        />
      </S.WrapperTable>

      <Modal onClose={handleCloseModal} visible={openModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            label="Data"
            required
            error={errors?.date && 'Campo de preenchimento obrigatório.'}
          >
            <Input
              type="date"
              value={inputDate}
              {...register('date', { required: true })}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputDate(e.currentTarget.value)
              }
            />
          </FormGroup>

          <FormGroup
            label="Categoria"
            required
            error={errors?.category && 'Campo de preenchimento obrigatório.'}
          >
            <SelectForm {...register('category', { required: true })}>
              <option value="">Selecione a categoria</option>
              <option value="food">Alimentação</option>
              <option value="rent">Despesa</option>
              <option value="marketplace">Mercado</option>
              <option value="salary">Salário</option>
            </SelectForm>
          </FormGroup>

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

export default Finance
