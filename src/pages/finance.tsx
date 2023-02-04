import Finance from '@/templates/Finance'
import Head from 'next/head'

export default function PageFinance() {
  return (
    <>
      <Head>
        <title>Dashboard - Financeiro</title>
        <meta name="description" content="Controle de Gastos" />
      </Head>
      <Finance />
    </>
  )
}
