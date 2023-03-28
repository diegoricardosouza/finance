import Profile from '@/templates/Profile'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'

export default function PageProfile() {
  return (
    <>
      <Head>
        <title>Dashboard - Perfil</title>
        <meta name="description" content="Perfil do usuário" />
      </Head>
      <Profile />
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
