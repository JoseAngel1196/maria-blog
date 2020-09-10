// Imports
import React from "react"

// App Imports

type icons = {
  alt: string
  src: string
}

interface SocialIconsProps {
  socialIcons: icons[]
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socialIcons }) => {
  return (
    <ul className="flex justify-center items-center">
      {socialIcons.map((icon, i) => (
        <li key={i} className="px-5">
          <img src={icon.src} alt={icon.alt} />
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
