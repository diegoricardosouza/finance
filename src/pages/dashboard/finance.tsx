import Finance from '@/templates/Finance'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: { session }
  }
}
