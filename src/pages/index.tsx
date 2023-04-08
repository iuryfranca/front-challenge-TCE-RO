import Head from 'next/head'

import { DialogNewUser } from '@/components/dialog-new-user'
import { Layout } from '@/components/layout'
import UsersList from '@/components/users-list'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js | Lista de Usuários</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex items-center justify-between pb-5">
          <h1 className="text-3xl font-semibold leading-tight tracking-tighter sm:text-3xl">
            Listagem de Usuários
          </h1>
          <DialogNewUser />
        </div>
        <UsersList />
      </section>
    </Layout>
  )
}
