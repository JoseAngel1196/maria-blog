// Imports
import React from "react"

// App Imports
import Logo from "./logo"
import Menu from "./menu"

interface NavBarProps {}

const MenuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
]

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header>
      <div className="bg-white border-b-2 border-gray-600 p-6 flex justify-between items-center">
        <Logo />
        <Menu items={MenuItems} />
      </div>
    </header>
  )
}

export default NavBar
