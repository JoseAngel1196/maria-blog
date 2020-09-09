// Imports
import React from "react"

// App Imports
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import youtube from "../../images/icon-youtube.svg"
import instagram from "../../images/icon-instagram.svg"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex justify-center items-center bg-black text-white p-10">
      <ul className="w-full flex justify-center items-center">
        <li className="px-5">
          <img src={facebook} alt="Facebook" />
        </li>
        <li className="px-5">
          <img src={youtube} alt="Youtube" />
        </li>
        <li className="px-5">
          <img src={twitter} alt="Twitter" />
        </li>
        <li className="px-5">
          <img src={pinterest} alt="Pinterest" />
        </li>
        <li className="px-5">
          <img src={instagram} alt="Instagram" />
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
