// Imports
import React from "react"

// App Imports

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full h-full bg-pink-400 flex justify-center items-center p-5">
      <p className="font-semibold text-sm">© 2020 Maria Pereyra</p>
    </footer>
  )
}

export default Footer
