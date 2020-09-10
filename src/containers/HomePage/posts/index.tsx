// Imports
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostCard from "../../../components/PostCard"

// App Imports

interface PostsProps {}

const Posts: React.FC<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 6
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 200)
            frontmatter {
              date
              description
              tags
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 570, maxHeight: 370, quality: 100) {
                    ...GatsbyImageSharpFluid
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
    <div className="container m-auto p-8">
      <div className="flex flex-wrap justify-between">
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title
          return (
            <PostCard
              title={title}
              image={
                node.frontmatter.cover === null
                  ? null
                  : node.frontmatter.cover.childImageSharp.fluid
              }
              url={""}
              description={node.excerpt}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Posts
