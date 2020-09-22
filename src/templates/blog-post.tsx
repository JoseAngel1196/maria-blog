// Imports
import React from "react"
import { graphql } from "gatsby"

// App Imports
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/Navbar"
import PostDetails from "../components/PostDetails"
import RelatedPostItem from "../components/RelatedPostItem"

interface BlogPost {}

const BlogPost: React.FC<BlogPost> = (props: any) => {
  const post = props.data.markdownRemark
  const { edges } = props.data.allMarkdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang="en"
        meta={[]}
        keywords={[]}
      />
      <NavBar />
      <div className="bg-gray-100">
        <div className="container mx-auto p-12 flex space-x-4">
          <PostDetails
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            preview={
              post.frontmatter.cover == null
                ? null
                : post.frontmatter.cover.childImageSharp.fluid
            }
            description={post.html}
          />
          <div className="flex-grow">
            <div className="bg-white border p-10 rounded-lg">
              <h2 className="mb-5 font-bold text-2xl">Latest Post</h2>
              <div className="posts">
                {edges.map(({ node }: any) => {
                  return (
                    <RelatedPostItem
                      key={node.fields.slug}
                      title={node.frontmatter.title || node.fields.slug}
                      url={node.fields.slug}
                      image={
                        node.frontmatter.cover == null
                          ? null
                          : node.frontmatter.cover.childImageSharp.fluid
                      }
                      tags={node.frontmatter.tags}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1170, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC } # filter: { fields: { slug: { ne: $slug } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 370, maxHeight: 220, quality: 90) {
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
