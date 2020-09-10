// Imports
import React from "./node_modules/react"
import { Link } from "./node_modules/gatsby"

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="logo">
      <Link className="text-2xl font-extrabold tracking-wider" to="/">
        Maria
        <span className="text-pink-600">Pereyra</span>
      </Link>
    </div>
  )
}

export default Logo
