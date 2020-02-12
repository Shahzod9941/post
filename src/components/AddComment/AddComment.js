import React, { useState } from 'react'

export default function AddComment({ onSaveComment }) {

    
    const [content, setContent] = useState("")
    const [likes, setLikes] = useState("♥");

    const submitAddComment = e => {
        e.preventDefault();
        onSaveComment(content);
        setContent("");
    }

    const handleAddComment = e => {
        const commentValue = e.target.value;
        setContent(commentValue)
    }

    return (
        <li className="mainPostsItemAddComments">
            <form onSubmit={submitAddComment}>
                <input onChange={handleAddComment} type="text"/>
                <button>Comment</button>
            </form>
        </li>
    )
}
