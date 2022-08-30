import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

let PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />

      <Link to={`/post/${post.id}`}>View Post</Link>
    </article>
  );
};


// First

PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;
