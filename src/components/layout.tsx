// Imports
import React from "react"
import { ThemeProvider } from "styled-components"

// App Imports
import { theme } from "../theme/index"
import Footer from "./Footer/Footer"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
