import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import dayjs from 'dayjs'

import('dayjs/locale/zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
