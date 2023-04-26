import './globals.css'

export const metadata = {
  title: 'Niek van der Plas',
  description: 'Online portfolio of Niek van der Plas',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
