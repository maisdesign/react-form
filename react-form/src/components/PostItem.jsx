import { useState } from 'react'
import ModifyPosts from './ModifyPosts.jsx'
import DeletePosts from './DeletePosts.jsx'

function PostItem({ article, updatePost, erasePost }) {
    const [isOpen, setIsOpen] = useState(false);
    const [editSinglePost, setEditSinglePost] = useState(null);
    const [deleteSinglePost, setDeleteSinglePost] = useState(null);

    return <>
        <article className="single-post">
            <h2 className="post-title">
                {article.title}
            </h2>
            <button type="button" className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read less" : "Read more"}</button>
            <div className="post-body">
                {isOpen && article.body}
            </div>
            <button type="button" className="btn btn-warning" onClick={() => setEditSinglePost(article.id)}><i className="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger" onClick={() => setDeleteSinglePost(article.id)}><i className="bi bi-x-square"></i>
            </button>
        </article>
        {editSinglePost !== null && <ModifyPosts toModify={article} setEditPost={setEditSinglePost} updatePost={updatePost} />}
        {deleteSinglePost !== null && <DeletePosts deletePost={deleteSinglePost} erasePost={erasePost} setDeletePost={setDeleteSinglePost} />}
    </>
}

export default PostItem
