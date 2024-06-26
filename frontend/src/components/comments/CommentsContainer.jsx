import React, { useEffect, useState } from 'react'
import { getCommentsData } from '../../data/comments'
import CommentForm from './CommentForm'
import Comment from './Comment';

const CommentsContainer = ({className,logginedUserId}) => {
    const [comments,setComments] = useState([]);
    const mainComments = comments.filter((comment)=> comment.parent === null)
    const [affectedComment, setaffectedComment]= useState(null)

    console.log(comments);
    useEffect(()=> {
    
        // const getComment = ()=>{}
        // getComment     Can do this also

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
            <div className='space-y-4 mt-8'>
                {mainComments.map((comment)=>(
                  <Comment comment={comment} logginedUserId={logginedUserId} />
                ))}    
            </div>
  </div>
  )
}

export default CommentsContainer