import React from 'react'
import Comment from '../Comment/Comment'
import AddComment from '../AddComment/AddComment'

export default function ListComments({ comments, onCommentAdd, onLikeComment }) {

    const handleCommentLike = id => {
        onLikeComment(id);
    }

    const handleSaveComment = comment => {
        onCommentAdd(comment)
    }

    return (
        <li className="mainPostsItemComments">
            <AddComment onSaveComment={handleSaveComment} />
            {comments.map(o => <Comment onLike={() => handleCommentLike(o.id)} comment={o} />)}
        </li>
    )
}
