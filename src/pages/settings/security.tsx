import type { NextPage } from 'next'
import Head from 'next/head'

import SettingsHeader from '@/components/settings/SettingsHeader'
import SecurityLogin from '@/components/settings/SecurityLogin'

const SecurityPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game7 Safe – Settings – Security</title>
      </Head>

      <SettingsHeader />

      <main>
        <SecurityLogin />
      </main>
    </>
  )
}

export default SecurityPage
