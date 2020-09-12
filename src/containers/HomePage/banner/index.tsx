// Imports
import React from "react"
// import FeaturePost from "../../../components/FeaturePost"

// App Imports
import heroImage from "../../../images/hero-image.png"

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hidden lg:block absolute shadow-lg opacity-100 bg-white p-8 rounded-lg bottom-0 right-0 transform -translate-x-4 translate-y-5">
        <h3 className="mb-8 font-bold tracking-widest">Featured Posts</h3>
        <div></div>
      </div>
    </div>
  )
}

export default Banner
