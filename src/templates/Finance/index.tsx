import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
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
import {
  currentMonthExt,
  filterListbyMonth,
  getCurrentDateNow,
  getCurrentMonth,
  orderItems
} from '@/utils/dateFilter'
import { items } from '@/data/items'
import { Item } from '@/types/Item'
import { convertMoney } from '@/utils/numberFormat'

import * as S from './styles'

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
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [openModal, setOpenModal] = useState(false)
  const [inputDate, setInputDate] = useState(getCurrentDateNow())
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const date = useMemo(() => {
    return new Date()
  }, [])

  useEffect(() => {
    const orderList = orderItems(list)
    setFilteredList(filterListbyMonth(orderList, currentMonth))
  }, [currentMonth, list])

  useEffect(() => {
    setSelectedMonth((prevState) =>
      prevState === '' ? currentMonthExt() : prevState
    )
    setSelectedYear((prevState) =>
      prevState === '' ? String(date.getFullYear()) : prevState
    )

    setCurrentMonth(`${selectedYear}-${selectedMonth}`)
  }, [selectedMonth, selectedYear, date])

  const handleFilter = ({ month, year }: { month: string; year: string }) => {
    setSelectedMonth(month === '' ? currentMonthExt() : month)
    setSelectedYear(year === '' ? String(date.getFullYear()) : year)
  }

  const handleCloseModal = () => {
    setOpenModal(!openModal)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)

    const formData = {
      ...data,
      value: parseFloat(data.value.replace(/\./g, '').replace(',', '.'))
    }

    console.log(formData)

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  // console.log(currentMonth)

  // console.log('mes: ' + selectedMonth, 'ano: ' + selectedYear)
  // console.log(
  //   'click',
  //   'mes: ' + selectedMonth === '' ? currentMonth() : selectedMonth,
  //   'ano: ' + selectedYear === '' ? String(date.getFullYear()) : selectedYear
  // )

  return (
    <Base title="Dashboard" titleBreadcrumb="Dashboard">
      <S.Container>
        <Card
          icon={<GiMoneyStack size={30} />}
          title="Receita"
          subtitle="R$ 4682.50"
          color="white"
        />

        <Card
          icon={<GiTakeMyMoney size={30} />}
          title="Despesa"
          subtitle="R$ 3682.50"
          color="white"
        />

        <Card
          icon={<MdOutlineAttachMoney size={30} />}
          title="Balanço"
          subtitle="R$ 2682.50"
          color="green"
        />

        <SelectedData onButtonClick={handleFilter} />
      </S.Container>

      <S.WrapperTable>
        <S.AddButton onClick={() => setOpenModal(true)}>
          <AiOutlinePlus size={20} />
        </S.AddButton>

        <Table
          title="Tabela de Finanças"
          columns={columns}
          list={filteredList}
          deleteButton
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
    </Base>
  )
}

export default Finance
