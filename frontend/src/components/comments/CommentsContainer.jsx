import React, { useEffect, useState } from 'react'
import { getCommentsData } from '../../data/comments'
import CommentForm from './CommentForm'
import Comment from './Comment';

const CommentsContainer = ({className,logginedUserId}) => {
    const [comments,setComments] = useState([]);
    const mainComments = comments.filter((comment)=> comment.parent === null)

    const [affectedComment, setAffectedComment]= useState(null)


    console.log(comments);
    useEffect(()=> {
    
        // const getComment = ()=>{}

        // getComment

        // getComment()     Can do this also


        (async()=>{
            const commentData = await getCommentsData();
            setComments(commentData)
        })()
    }, [])

    const addCommentHandler = (value, parent = null, replyOnuser = null) =>{
        const newComment = {
            _id: Math.random().toString(),
            user:{
                _id:"a",
                name:"Venkat",
            },
            desc: value,
            post: "1",
            parent:parent,
            replyOnUser: replyOnuser,
            createdAt: new Date().toISOString(),
            commentReplies: [],
        };
     setComments((curState)=>{
        return [newComment, ...curState];
     });
     setAffectedComment(null);
    };

    const updateCommentHandler = (value, commentId) =>{
         const updatedComments = comments.map((comment) => {
            if(comment._id === commentId){
                return {...comment, desc:value};
            }
            return comment;
         });
         setComments(updatedComments);
         setAffectedComment(null);
    }
    const deleteCommentHandler = (commentId) => {
        // console.log("Deleting comment with ID:", commentId); // Debugging line
        const updatedComments = comments.filter((comment) => comment._id !== commentId);
        setComments(updatedComments);
    };

    const getRepliesHandler = (commentId)=>{
        return comments.filter((comment)=> comment.parent === commentId)
        .sort((a,b)=>{
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        
        })
    };

  return (
    <div className= {`${className}`}> 
         <CommentForm btnLabel="Send" formSubmitHandler={(value)=> addCommentHandler(value)}/>
            <div className='space-y-4 mt-8'>
                {mainComments.map((comment)=>(

               

                  <Comment
                   key={comment._id} 
                  comment={comment} logginedUserId={logginedUserId} 
                   affectedComment={affectedComment} 
                   setAffectedComment={setAffectedComment} 
                   addComment={addCommentHandler}
                   updateComment={updateCommentHandler}
                   deleteComment={deleteCommentHandler}
                  commentReplies ={getRepliesHandler(comment._id)}
                   />

                ))}    
            </div>
  </div>
  )
}

export default CommentsContainer