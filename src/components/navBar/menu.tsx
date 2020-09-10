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
    <ul className="flex justify-center items-center">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className="cursor-pointer px-10 font-medium">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
