function QueryPosts({ postQuery }) {
    return postQuery.map((article) =>
        <li key={article.id} className="post-title">{article.title}</li>
    )
}
export default QueryPosts