// Imports
import React from "react"
import { Link } from "gatsby"

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link to="/" className="mb-8 lg:mb-0 font-extrabold text-3xl">
      Maria <span className="text-pink-600">Pereyra</span>
    </Link>
  )
}

export default Logo
