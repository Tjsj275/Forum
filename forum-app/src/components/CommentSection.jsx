import React from 'react';

const CommentSection = ({ comments }) => {
  return (
    <div className="comments">
      <h3>Comments:</h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentSection;
