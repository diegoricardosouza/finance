import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Freela from '@/templates/Freela'
import protectedRoutes from '@/utils/protected-routes'

export default function PageFreela() {
  return (
    <>
      <Head>
        <title>Dashboard - Freelas</title>
        <meta name="description" content="Meus Freelas" />
      </Head>
      <Freela />
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
