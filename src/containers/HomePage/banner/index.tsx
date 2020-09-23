// Imports
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// App Imports
import FeaturePost from "../../../components/FeaturePost"
import heroImage from "../../../images/hero-image.png"

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
        filter: { frontmatter: { tags: { eq: "featured" } } }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 90, maxHeight: 90, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const Posts = Data.allMarkdownRemark.edges

  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hidden lg:block absolute shadow-lg opacity-100 bg-white p-8 rounded-lg bottom-0 right-0 transform -translate-x-4 translate-y-5">
        <h3 className="mb-8 font-bold tracking-widest">Featured Posts</h3>
        <div>
          {Posts.map(({ node }: any) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <FeaturePost
                key={node.fields.slug}
                title={title}
                image={
                  node.frontmatter.cover == null
                    ? null
                    : node.frontmatter.cover.childImageSharp.fluid
                }
                url={node.fields.slug}
                tags={node.frontmatter.tags}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Banner
