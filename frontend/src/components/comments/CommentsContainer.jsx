import React from 'react'
import CommentForm from './CommentForm'

const CommentsContainer = ({className}) => {
    const addCommentHandler = (value,parent = null,replyOnuser = null)
  return (
    <div className= {`${className}`}> 
         <CommentForm btnLable={"btn"}/>
  </div>
  )
}

export default CommentsContainer