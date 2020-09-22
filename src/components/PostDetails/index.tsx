// Imports
import React from "react"
import Img from "gatsby-image"

// App Imports
import { PostDescription } from "./postDetail.style"

interface PostDetailsProps {
  title: string
  date?: string
  preview?: any
  description: any
}

const PostDetails: React.FC<PostDetailsProps> = ({
  description,
  title,
  date,
  preview,
}) => {
  return (
    <div className="w-3/5 text-justify">
      <h1 className="mb-3 font-bold text-3xl">{title}</h1>
      <p className="mb-8 text-gray-900">{date}</p>
      {preview == null ? null : (
        <Img
          className="mb-16 rounded-lg shadow-lg"
          fluid={preview}
          alt={title}
        />
      )}
      <PostDescription
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

export default PostDetails
