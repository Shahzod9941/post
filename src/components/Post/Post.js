import React from 'react'
import CountLikes from '../CountLikes/CountLikes'
import DescriptionPosts from '../DescriptionPosts/DescriptionPosts'
import ListComments from '../ListComments/ListComments'
import User from '../User/User'

export default function Post({ post, onSaveComment, onCommentLike }) {

    const handleCommentAdd = comment => {
        onSaveComment(comment);
    }
    const handleCommentLike = id => {
        onCommentLike(id);
    }

    return (
        <ul id="mainPostBlock">
            <User post={post} />
            <CountLikes post={post} />
            <DescriptionPosts post={post} />
            <ListComments comments={post.comments} onLikeComment={handleCommentLike} onCommentAdd={handleCommentAdd} />
        </ul>
    )
}
