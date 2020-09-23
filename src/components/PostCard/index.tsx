// Imports
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

// App Imports

interface PostCardProps {
  image: any
  title: string
  description: string
  url: string
  date?: string
  tags?: []
}

const PostCard: React.FC<PostCardProps> = ({
  description,
  image,
  title,
  url,
  date,
  tags,
}) => {
  return (
    <div>
      {image === null ? null : (
        <Link to={`/${url}`}>
          <Img
            className="mb-3 rounded-lg shadow-2xl"
            fluid={image}
            alt="post preview"
          />
        </Link>
      )}
      {tags === null ? null : (
        <div className="mb-4 space-x-5 text-base text-pink-600">
          {tags?.map((tag: string, i: number) => (
            <Link key={i} to="/">{`#${tag}`}</Link>
          ))}
        </div>
      )}
      <h3 className="mb-3 font-bold text-lg">{title}</h3>
      <p className="leading-7 text-justify">{description}</p>
    </div>
  )
}

export default PostCard
