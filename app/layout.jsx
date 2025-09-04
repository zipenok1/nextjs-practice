// These styles apply to every route in the application
import './global.css'
 
export default function RootLayout({ children }) {
    return (
      <html lang="ru">
        <body>{children}</body>
      </html>
    )
  }