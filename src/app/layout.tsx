import './globals.css'
import { ReactNode } from 'react'
import Layout from './components/Layout'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DeliveryApp</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
