import './globals.css'
import { ReactNode } from 'react'
import Layout from './components/Layout'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
