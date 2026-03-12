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

  function updatePost(modifiedPost) {
    setPostQuery(postQuery.map((post) => ((post.id === modifiedPost.id) ? { ...post, ...modifiedPost } : { ...post })));
  }

  function erasePost(toDelete) {
    setPostQuery(postQuery.filter((post) => ((post.id !== toDelete))));
  }

  return (
    <>
      <div className="container">
        <header className="top-header">
          <h1>Blog</h1>
        </header>
        <main>
          <div className="posts-list">
            <QueryPosts postQuery={postQuery} updatePost={updatePost} erasePost={erasePost} />
          </div>

          {/* Aggiungi Post */}
          <button className="btn btn-success add-post" onClick={() => setIsAddingPost(true)}>Aggiungi un post</button>
          {isAddingPost && <AddPosts setIsAddingPost={setIsAddingPost} newPost={newPost} setNewPost={setNewPost} addPost={addPost} />}
        </main>
      </div>
    </>
  )
}

export default App
