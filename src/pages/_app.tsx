import type { AppProps } from 'next/app'
import {Poppins} from 'next/font/google'
import WatchMeProvider from '@/hooks/watchme'
import '@/styles/globals.scss'

import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'


const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WatchMeProvider>
      <main className={poppins.className}>
        <Sidebar />
        <Header />
        <Component {...pageProps} />
      </main>
    </WatchMeProvider>
  )
}
