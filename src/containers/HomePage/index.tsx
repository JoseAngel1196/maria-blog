// Imports
import React from "react"

// App Imports
import Navbar from "../../components/Navbar"
import Banner from "./banner"
import Posts from "./posts"

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Posts />
    </React.Fragment>
  )
}

export default HomePage
