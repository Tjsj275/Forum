import React, { useState } from 'react';
import CommentSection from './CommentSection';

const PostDetail = ({ post, onBack, onComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      onComment(post.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Votes: {post.votes}</p>

      {/* Comment Section */}
      <CommentSection comments={post.comments} />

      {/* Add New Comment */}
      <textarea 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="Leave a comment..."
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default PostDetail;
