// Imports
import React from "react"

// App Imports
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import youtube from "../../images/youtube.svg"

interface FooterProps {}

const SocialIcons = [
  {
    name: "Facebook",
    image: facebook,
  },
  {
    name: "Instagram",
    image: instagram,
  },
  {
    name: "Youtube",
    image: youtube,
  },
]

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-white text-gray-600">
      <div className="container mx-auto p-8 text-center lg:flex justify-between items-center">
        <div className="mb-8 lg:mb-0">
          <p className="text-medium">
            Copyright © 2020 
          </p>
        </div>
        <ul className="flex justify-center space-x-5">
          {SocialIcons.map((icon, i) => (
            <li key={i}>
              <img src={icon.image} alt={icon.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
