import React, { useState } from 'react'
import AddPostsForm from '../AddPostsForm/AddPostsForm'
import Post from '../Post/Post'

let nextPostId = 1;
let nextCommentId = 1;
export default function Wall() {

    const instaPosts = [
      
        {
            id: nextPostId++,
            author: "User",
            userAva: "https://i.pravatar.cc/150?img=22",
            postImg: "https://i.pravatar.cc/150?img=33",
            likes: 4,
            descriptionPost: "This is second post",
            comments: [
                { id: nextCommentId++, author: 'Second user  ', content: 'Nice Post', likes: 0 },
            ]
        },
    ];

    const [allPosts, setAllPosts] = useState(instaPosts)

    const addComment = (comments, comment, p) => {
        return [...comments, {
            id: nextCommentId++,
            userAva: p.userAva,
            author: p.author,
            content: comment,
            likes: 0
        }]
    }

    function likeComment(comments, id) {
        return comments.map(c => {
            if (c.id !== id) {
                return c;
            }
            return { ...c, likes: c.likes + 1 }; 
        });
    }

    const handleSave = post => {
        setAllPosts(prevState => [{ ...post }, ...prevState])
    }

    const handleCommentLike = commentId => setAllPosts(prevState => prevState.map(
        p => ({ ...p, comments: likeComment(p.comments, commentId) })
    ));

    const handleSaveComment = (postId, comment) => {
        setAllPosts(prevState => prevState.map(p => ({
            ...p, comments: p.id !== postId ? p.comments : addComment(p.comments, comment, p)
        })
        ))
    };

    return (
        <div>
            
                <AddPostsForm onSave={handleSave} />
                <div id="block">
                {allPosts.map(o => <Post post={o} onCommentLike={handleCommentLike} onSaveComment={comment => handleSaveComment(o.id, comment)} />)}
            </div>
            
        </div>
    )
}
