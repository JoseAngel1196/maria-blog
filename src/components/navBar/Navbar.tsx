// Imports
import React from "react"

// App Imports
import Menu from "./menu"
import Logo from "./logo"

interface NavbarProps {}

const MenuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/page/1",
  },
]

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="bg-white border-b-2">
      <div className="container mx-auto py-5 px-10 text-center lg:flex justify-between items-center">
        <Logo />
        <Menu items={MenuItems} />
      </div>
    </div>
  )
}

export default Navbar
