import PostItem from './PostItem.jsx';
function QueryPosts({ postQuery, updatePost, erasePost }) {
    return postQuery.map((article) =>
        <PostItem key={article.id} article={article} updatePost={updatePost} erasePost={erasePost} />
    )
}
export default QueryPosts
