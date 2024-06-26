import React, { useState } from 'react'

const CommentForm = ( {formSubmitHandler}) => {
    const [ value,setValue]= useState("")
const submithandler =(e)=>{
     e.preventDefault()
    formSubmitHandler(value);
    setValue("");
}

  return (
    <div> 
        <form onSubmit={submithandler}>
            <div className='flex flex-col items-end border border-primary rounded-lg p-4'>
                <textarea className='w-full focus:outline-none' rows="5" placeholder='Leave your comment here'
                value={value}
                onChange={(e)=> setValue(e.target.value)}></textarea>
                <button type='submit' className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2'>
                     Send
                </button>
            </div>
        </form>
    </div>
  )
}

export default CommentForm