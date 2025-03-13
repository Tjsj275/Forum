import React, { useState } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import NewPostForm from "./components/NewPostForm";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Seeds from around the world",
      votes: 0,
      content: "Seeds from around the world",
      comments: [],
    },
    {
      id: 2,
      title: "Best weather for cherry tomatoes",
      votes: 0,
      content: "Best weather for cherry tomatoes",
      comments: [],
    },
    {
      id: 3,
      title: "The most annoying garden pests",
      votes: 0,
      content: "The most annoying garden pests",
      comments: [],
    },
    {
      id: 4,
      title: "Natural and effective pesticides",
      votes: 0,
      content: "Natural and effective pesticides",
      comments: [],
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  // Handle upvotes and downvotes
  const handleVote = (id, type) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, votes: post.votes + (type === "up" ? 1 : -1) }
          : post
      )
    );
  };

  // Handle adding comments to a post
  const handleComment = (id, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  // Handle adding new posts
  const handleAddPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      votes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]); // Add new post to the top of the list
    setShowNewPostForm(false); // Hide the form after submission
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Forum</h1>

      {!selectedPost && !showNewPostForm && (
        <>
          <button
            onClick={() => setShowNewPostForm(true)}
            className="bg-green-500 text-white px-6 py-4 rounded hover:bg-green-600 mb-6"
          >
            Ask a Question
          </button>
          <PostList
            posts={posts}
            onVote={handleVote}
            onSelect={setSelectedPost}
          />
        </>
      )}

      {showNewPostForm && (
        <NewPostForm
          onSubmit={handleAddPost}
          onCancel={() => setShowNewPostForm(false)}
        />
      )}

      {selectedPost && (
        <PostDetail
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
          onComment={handleComment}
        />
      )}
    </div>
  );
};

export default App;
