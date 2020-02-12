import React from 'react'

export default function DescriptionPosts({ post }) {
    return (
            <li className="mainPostsItemDescription">
                <div>{post.descriptionPost}</div>
            </li>
    )
}
