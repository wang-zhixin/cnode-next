import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import dayjs from 'dayjs'
import { SWRConfig } from 'swr'
import { fetcher } from '@/utils/fetcher'

import('dayjs/locale/zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'

export default function App({ Component, pageProps }: AppProps<{ fallback: any }>) {
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTime)

  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: true }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
