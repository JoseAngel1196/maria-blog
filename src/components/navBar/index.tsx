// Imports
import React from "react"

// App Imports
import Menu from "./menu"
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import youtube from "../../images/icon-youtube.svg"
import instagram from "../../images/icon-instagram.svg"
import SocialIcons from "./socialIcons"

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

const socialIcons = [
  {
    alt: "Facebook",
    src: facebook,
  },
  {
    alt: "Twitter",
    src: twitter,
  },
  {
    alt: "Youtube",
    src: youtube,
  },
  {
    alt: "Pinterest",
    src: pinterest,
  },
  {
    alt: "Instagram",
    src: instagram,
  },
]

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header className="fixed w-full bg-pink-400 flex justify-between items-center p-3">
      <SocialIcons socialIcons={socialIcons} />
      <Menu items={MenuItems} />
    </header>
  )
}

export default NavBar
