import React from 'react'

export default function Comment({ comment, onLike }) {

    const handleLike = () => {
        onLike();
    }

    return (
        <article className="commentBlock">
            <div><img src={comment.postImg} alt="" /></div>
            <div>{comment.author}</div>
            <div>{comment.content}</div>
            <div>{comment.likes}<button onClick={handleLike}>♥</button></div>
        </article>
    )
}
