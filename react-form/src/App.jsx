import { posts } from './data/posts'
import { useState } from 'react'
import QueryPosts from './components/QueryPosts.jsx'
import AddPosts from './components/AddPosts.jsx'


function App() {
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [postQuery, setPostQuery] = useState(posts)
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  function addPost() {
    const newId = postQuery.length + 1;
    const timestamp = new Date().toISOString();
    setPostQuery([...postQuery, { id: newId, title: newPost.title, body: newPost.body, timestamp: timestamp }]);
    setNewPost({ title: '', body: '' });
  }

  return (
    <>
      <h1>Blog</h1>
      <ul className="posts-list">

        <QueryPosts postQuery={postQuery} />
        <button className="add-post" onClick={() => setIsAddingPost(true)}>Aggiungi un post</button>
        {isAddingPost && <AddPosts setIsAddingPost={setIsAddingPost} isAddingPost={isAddingPost} newPost={newPost} setNewPost={setNewPost} addPost={addPost} />}

      </ul>
    </>
  )
}

export default App
