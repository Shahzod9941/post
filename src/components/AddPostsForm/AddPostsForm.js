import React, { useState } from 'react'

export default function AddPostsForm({ onSave }) {

   
    const [postImg, setSrcForPost] = useState("");
    const [descriptionPost, setDescriptionPost] = useState("");
    

    const handleSubmitPost = evt => {
        evt.preventDefault();
        onSave({ postImg, descriptionPost, })
    };

    const handleChangeSrcForPost = evt => {
        const postImgSrc = evt.target.value;
        setSrcForPost(postImgSrc);
    };
    const handleChangeDescription = evt => {
        const postDescription = evt.target.value;
        setDescriptionPost(postDescription);
    };

    return (
        <form onSubmit={handleSubmitPost} className="addPostFormItem" >
            <input onChange={handleChangeSrcForPost} value={postImg} placeholder="Link of image" /><br />
            <textarea onChange={handleChangeDescription} cols="30" rows="10" placeholder="Post Description"></textarea><br />
            <button >Post</button><br />
        </form>
    )
}
