// Imports
import * as React from "react"

// App Imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../containers/HomePage"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Maria Pereyra"
        lang="en"
        meta={[]}
        keywords={[]}
        description=""
      />
      <HomePage />
    </Layout>
  )
}

export default IndexPage
