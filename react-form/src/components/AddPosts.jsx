
function AddPosts({ setIsAddingPost, setNewPost, newPost, addPost }) {
    return <>
        <form onSubmit={(e) => { e.preventDefault(); addPost(); setIsAddingPost(false) }}>
            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">Titolo</label>
                <input type="text" className="form-control" id="postTitle" aria-describedby="postTitle" value={newPost.title} onChange={(c) => setNewPost({ ...newPost, title: c.target.value })} >
                </input>
            </div>
            <div className="mb-3">
                <label htmlFor="postBody" className="form-label">Testo</label>
                <input type="textarea" className="form-control" id="postBody" aria-describedby="postBody" value={newPost.body} onChange={(c) => setNewPost({ ...newPost, body: c.target.value })} >
                </input>
            </div>
            <button type="submit" className="btn btn-primary">Submit
            </button>
        </form >

    </>
}
export default AddPosts