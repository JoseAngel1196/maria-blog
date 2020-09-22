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
    <div className="space-x-16">
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.url}
          className="text-gray-600 hover:text-gray-900 text-base"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Menu
