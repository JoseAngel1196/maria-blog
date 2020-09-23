// Imports
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// App Imports

interface FeaturePost {
  image?: any
  title: string
  url: string
  tags?: []
}

const FeaturePost: React.FC<FeaturePost> = ({
  title,
  url,
  image,
  tags,
}) => {
  return (
    <div className="flex">
      {image == null ? null : (
        <Link to={url}>
          <Img className="w-24" fluid={image} alt="post preview" />
        </Link>
      )}
      <div className="p-5">
        <p className="mb-2 font-bold">{title}</p>
        <div className="space-x-4 text-sm font-medium text-pink-500">
          {tags == null ? null : (
            <React.Fragment>
              {tags.slice(0, 2).map((tag: string, i: number) => (
                <Link key={i} to="/">{`#${tag}`}</Link>
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturePost
