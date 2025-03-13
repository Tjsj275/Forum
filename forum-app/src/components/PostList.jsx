import React from 'react';

const PostList = ({ posts, onVote, onSelect }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2 onClick={() => onSelect(post)}>{post.title}</h2>
          <p>Votes: {post.votes}</p>
          <button onClick={() => onVote(post.id, 'up')}>Upvote</button>
          <button onClick={() => onVote(post.id, 'down')}>Downvote</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
