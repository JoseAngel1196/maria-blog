// Imports
import React from "react"

// App Imports
import NavBar from "../../components/Navbar"
import Banner from "./banner"
import Posts from "./posts"

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
      <Posts />
    </React.Fragment>
  )
}

export default HomePage
