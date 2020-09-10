// Imports
import React from "react"

// App Imports
import NavBar from "../../components/Navbar"
import Banner from "./banner"

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Banner />
    </React.Fragment>
  )
}

export default HomePage
