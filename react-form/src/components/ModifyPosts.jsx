import { useState } from 'react';

function ModifyPosts({ toModify, updatePost, setEditPost }) {
    const [modifiedPost, setModifiedPost] = useState({ id: toModify.id, title: toModify.title, body: toModify.body })

    return <>
        <form onSubmit={(e) => { e.preventDefault(); updatePost(modifiedPost); }}>
            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">Titolo</label>
                <input type="text" className="form-control" id="postTitle" aria-describedby="postTitle" value={modifiedPost.title} onChange={(c) => setModifiedPost({ ...modifiedPost, title: c.target.value })} >
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="postBody" className="form-label">Testo</label>
                <input type="textarea" className="form-control" id="postBody" aria-describedby="postBody" value={modifiedPost.body} onChange={(c) => setModifiedPost({ ...modifiedPost, body: c.target.value })} >
                </input>
            </div>
            <button type="submit" className="btn btn-warning">Modifica
            </button>
            <button type="button" className="btn btn-outline-warning" onClick={() => setEditPost(null)}>Ripensaci
            </button >
        </form >

    </>
}

export default ModifyPosts