import { ThemeProvider } from "./components/theme/provider.jsx"
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import "./globals.css"

export const metadata = {
  title: "KNMI Opdracht",
  description: "KNMI Opdracht applicatie",
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


