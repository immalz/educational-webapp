// import 'normalize.css/normalize.css';
import '../styles/global.css'
import Navigation from "@/components/Navigation"
import { Providers } from './providers'

export const metadata = {
  title: 'Sagrados Niños de Jesus',
  description: 'Plataforma educativa para los alumnos de la institución Sagrados Niños de Jesus',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <Navigation /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}


