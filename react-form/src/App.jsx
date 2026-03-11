import { posts } from './data/posts'
import { useState } from 'react'
import QueryPosts from './components/QueryPosts.jsx'
import AddPosts from './components/AddPosts.jsx'
import ModifyPosts from './components/ModifyPosts.jsx'


function App() {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [postQuery, setPostQuery] = useState(posts)
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editPost, setEditPost] = useState(null);

  function addPost() {
    const newId = postQuery.length + 1;
    const timestamp = new Date().toISOString();
    setPostQuery([...postQuery, { id: newId, title: newPost.title, body: newPost.body, timestamp: timestamp }]);
    setNewPost({ title: '', body: '' });
  }

  function updatePost(modifiedPost) {
    setPostQuery(postQuery.map((post) => ((post.id === modifiedPost.id) ? { ...post, ...modifiedPost } : { ...post })))
    console.log("Questo è modifiedPost" + modifiedPost);
  }

  return (
    <>
      <h1>Blog</h1>
      <ul className="posts-list">
        <QueryPosts postQuery={postQuery} setEditPost={setEditPost} />

      </ul>
      {editPost !== null && <ModifyPosts toModify={postQuery.find((toModify) => toModify.id === editPost)} setEditPost={setEditPost} updatePost={updatePost} />}
      <button className="add-post" onClick={() => setIsAddingPost(true)}>Aggiungi un post</button>
      {isAddingPost && <AddPosts setIsAddingPost={setIsAddingPost} isAddingPost={isAddingPost} newPost={newPost} setNewPost={setNewPost} addPost={addPost} />}
    </>
  )
}

export default App
