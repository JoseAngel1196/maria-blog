// Imports
import React from "react"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"

// App Imports

interface RelatedPostItem {
  title: string
  image: any
  tags: []
  url: string
}

const RelatedPostItem: React.FC<RelatedPostItem> = ({
  image,
  title,
  tags,
  url,
}) => {
  return (
    <div className="flex space-x-3">
      {image === null ? null : (
        <Link to={`/${url}`}>
          <Img className="w-32" fluid={image} alt="post preview" />
        </Link>
      )}
      <div>
        <h3 className="mb-3 font-bold">{title}</h3>
        <div className="space-x-4 text-sm font-medium text-pink-500">
          {tags == null ? null : (
            <React.Fragment>
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default RelatedPostItem
