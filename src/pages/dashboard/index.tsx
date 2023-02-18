import Dashboard from '@/templates/Dashboard'
import protectedRoutes from '@/utils/protected-routes'
import { GetServerSidePropsContext } from 'next'

export default function PageDashboard() {
  return <Dashboard />
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
