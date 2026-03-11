function DeletePosts({ erasePost, deletePost }) {

    return <>
        <button className="post-delete" onClick={() => erasePost(deletePost)}>
            Cancellalo</button >
    </>
}
export default DeletePosts