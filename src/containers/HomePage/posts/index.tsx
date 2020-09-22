// Imports
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App Imports
import PostCard from "../../../components/PostCard"
import Button from "../../../components/Button"

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
            fields {
              slug
            }
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
    <div className="bg-gray-100">
      <div className="container mx-auto p-10">
        <div className="posts mb-20 lg:grid lg:grid-cols-2">
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
        <div className="flex justify-center">
          <Button
            title="See more"
            className="py-3 px-6 bg-black text-white hover:shadow-2xl transition duration-500"
            type="submit"
          />
        </div>
      </div>
    </div>
  )
}

export default Posts
