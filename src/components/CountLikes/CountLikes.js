import React from 'react'

export default function CountLikes({ post }) {
    return (
        <li className="mainPostsItemCountLikes">
            <div>{post.likes}</div>
        </li>
    )
}
