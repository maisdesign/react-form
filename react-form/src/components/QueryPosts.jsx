function QueryPosts({ postQuery, setEditPost, setDeletePost }) {
    return postQuery.map((article) =>
        <article key={article.id} className="post-title">
            {article.title}
            <button type="button" onClick={(e) => { e.preventDefault(); setEditPost(article.id) }}>O
            </button>
            <button type="button" onClick={(e) => { e.preventDefault(); setDeletePost(article.id) }} >X
            </button>
        </article>
    )
}
export default QueryPosts