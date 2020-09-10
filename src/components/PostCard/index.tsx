// Imports
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import Button from "../Button"

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
    <React.Fragment>
      {image === null ? null : (
        <Link to={url}>
          <Img fixed={image} alt="post preview" />
        </Link>
      )}
      {tags === null ? null : (
        <ul className="flex">
          {tags?.map((tag: string, i: number) => (
            <li className="p-2">
              <Link key={i} to={url}>
                {`#${tag}`}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="post__details">
        <h1 className="font-semibold py-2 text-lg">{title}</h1>
        <p className="text-justify-leading-7 text-sm">{description}</p>
        <Button
          type="button"
          className="mt-5 bg-pink-300 hover:bg-white-700 hover:text-black text-white font-medium py-2 px-6"
          title="Read More"
        />
      </div>
    </React.Fragment>
  )
}

export default PostCard
