// Imports
import React from "react"

// App Imports
import Menu from "./menu"
import Logo from "./logo"

interface NavBarProps {}

const MenuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
]

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div className="bg-white border-b-2">
      <div className="container mx-auto py-5 text-center lg:flex justify-between items-center">
        <Logo />
        <Menu items={MenuItems} />
      </div>
    </div>
  )
}

export default NavBar
