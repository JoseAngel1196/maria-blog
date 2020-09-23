// Imports
import * as React from "react"
import { graphql } from "gatsby"

// App Imports
import Layout from "../components/layout"
import Navbar from "../components/Navbar/Navbar"
import PostCard from "../components/PostCard"
import SEO from "../components/seo"

const BlogList = (props: any) => {
  const { data } = props
  const Posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/page/1" : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`
  const PrevLink = !isFirst && prevPage
  const NextLink = !isLast && nextPage

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} lang="en" meta={[]} keywords={[]} />
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto p-10">
          <div className="mb-20 lg:grid lg:grid-cols-2">
            {Posts.map(({ node }: any) => {
              const title = node.frontmatter.title
              return (
                <PostCard
                  key={node.fields.slug}
                  title={title}
                  image={
                    node.frontmatter.cover === null
                      ? null
                      : node.frontmatter.cover.childImageSharp.fluid
                  }
                  url={node.fields.slug}
                  description={node.excerpt}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            description
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 90) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
