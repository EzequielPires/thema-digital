import { Header, HeaderSecondary } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tema Digital',
  description: 'Somos a Agência de Marketing Digital formada por uma equipe de profissionais com ampla bagagem prática e anos no mercado de trabalho, transformando ideias de empreendedores visionários em negócios lucrativos através do fortalecimento da marca e do posicionamento virtual. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
