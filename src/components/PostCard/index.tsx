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
  console.log(image)
  return (
    <div className="w-1/2 px-2 py-2 mb-2">
      {image === null ? null : (
        <Link to={url}>
          <Img className="rounded shadow-md" fluid={image} alt="post preview" />
        </Link>
      )}
      {tags === null ? null : (
        <ul className="flex">
          {tags?.map((tag: string, i: number) => (
            <li className="p-2">
              <Link className="cursor-pointer text-pink-700" key={i} to={url}>
                {`#${tag}`}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="post__details">
        <h1 className="font-semibold py-2 text-lg">{title}</h1>
        <p className="text-justify leading-8 text-lg">{description}</p>
        <Button
          type="button"
          className="bg-pink-300 hover:bg-white-700 hover:text-black text-white font-medium py-2 px-6"
          title="Read More"
        />
      </div>
    </div>
  )
}

export default PostCard
