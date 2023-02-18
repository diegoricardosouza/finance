import Register from '@/templates/Register'
import Head from 'next/head'

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
