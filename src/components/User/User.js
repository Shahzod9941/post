import React from 'react'

export default function User({ post }) {
    return (
        <li>
            <ul className="userHeader">
                <li className="userHeaderImg"><img src={post.userAva} alt="" /></li>
                <li className="userHeaderName"><div>{post.author}</div></li>
            </ul>
            <div className="mainPostsItemPostImg"><img src={post.postImg} alt="" /></div>
        </li>
    )
}
