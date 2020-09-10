// Imports
import React from "react"

// App Imports

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <main>
      <div className="h-64 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">
          Maria <span className="text-pink-600">Pereyra</span>
        </h1>
        <p className="text-black-tracking-widest">CREATIVE BLOGGER</p>
      </div>
    </main>
  )
}

export default Banner
