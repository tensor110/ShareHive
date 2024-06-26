import React, { useEffect, useState } from 'react'
import { getCommentsData } from '../../data/comments'
import CommentForm from './CommentForm'

const CommentsContainer = ({className}) => {
    const [comments,setComments] = useState([]);
    console.log(comments);
    useEffect(()=> {
    
        // const getComment = ()=>{}
        // getComment

        (async()=>{
            const commentData = await getCommentsData();
            setComments(commentData)
        })()
    }, [])

    const addCommentHandler = (value, parent = null, replyOnuser = null) =>{
        const newComment = {
            _id:"10",
            user:{
                _id:"a",
                name:"Venkat",
            },
            desc: value,
            post: "1",
            parent:parent,
            replyOnUser: replyOnuser,
            createdAt: "2024-06-26T17:22:05.092+0000",
        };
     setComments((curState)=>{
        return [newComment, ...curState];
     });
    };
  return (
    <div className= {`${className}`}> 
         <CommentForm btnLabel="Send" formSubmitHandler={(value)=> addCommentHandler(value)}/>
  </div>
  )
}

export default CommentsContainer