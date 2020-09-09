// Imports
import React from "react"
import { Link } from "gatsby"

type MenuItemProps = {
  url: string
  label: string
  external?: boolean
}

interface MenuProps {
  items: MenuItemProps[]
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul className="w-1/4 flex justify-evenly items-center">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.url}
            className="font-bold text-sm text-gray-600 cursor-pointer"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
