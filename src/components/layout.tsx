// Imports
import React from "react"
import { ThemeProvider } from "styled-components"

// App Imports
import { theme } from "../theme/index"
import ResetCSS from "./resetCSS"
import Footer from "./Footer/index"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <div className="bg-white">
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
