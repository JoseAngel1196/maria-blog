// Imports
import React from "react"

// App Imports

interface ButtonProps {
  title: string
  disabled?: boolean
  onClick?: (e: any) => void
  className?: string
  style?: any
  type?: "button" | "submit"
}

const Button: React.FC<ButtonProps> = ({
  title,
  className,
  disabled,
  onClick,
  style,
  type,
}) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {title}
    </button>
  )
}

export default Button
