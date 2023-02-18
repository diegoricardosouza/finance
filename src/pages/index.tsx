import Login from '@/templates/Login'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function Home() {
  return <Login />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      },
      props: { session }
    }
  }

  return {
    props: {}
  }
}
