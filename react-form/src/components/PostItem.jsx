import { useState } from 'react'
import ModifyPosts from './ModifyPosts.jsx'
import DeletePosts from './DeletePosts.jsx'

function PostItem({ article, updatePost, erasePost }) {
    const [isOpen, setIsOpen] = useState(false);
    const [editSinglePost, setEditSinglePost] = useState(null);
    const [deleteSinglePost, setDeleteSinglePost] = useState(null);

    return <>
        <article className="single-post">
            <div className="post-header">
                <h2 className="post-title">{article.title}</h2>
                <div className="post-actions gap-1">
                    <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => setEditSinglePost(article.id)}><i className="bi bi-pencil-square"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => setDeleteSinglePost(article.id)}><i className="bi bi-x-square"></i></button>
                </div>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read less" : "Read more"}</button>
            {isOpen && <div className="post-body">{article.body}</div>}
            {editSinglePost !== null && <ModifyPosts toModify={article} setEditPost={setEditSinglePost} updatePost={updatePost} />}
            {deleteSinglePost !== null && <DeletePosts deletePost={deleteSinglePost} erasePost={erasePost} setDeletePost={setDeleteSinglePost} />}
        </article>
    </>
}

export default PostItem
