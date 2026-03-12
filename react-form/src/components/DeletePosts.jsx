function DeletePosts({ erasePost, deletePost, setDeletePost }) {

    return <>
        <button className="btn btn-danger post-delete mx-1" onClick={() => erasePost(deletePost)}>
            Cancellalo</button >
        <button type="button" className="btn btn-outline-danger" onClick={() => setDeletePost(null)}>Ripensaci
        </button >
    </>
}
export default DeletePosts