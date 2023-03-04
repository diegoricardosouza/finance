import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Register from '@/templates/Register'
import protectedRoutes from '@/utils/protected-routes'

export default function PageRegister() {
  return (
    <>
      <Head>
        <title>Dashboard - Cadastro de usuários</title>
        <meta name="description" content="Cadastro de usuários" />
      </Head>
      <Register />
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
