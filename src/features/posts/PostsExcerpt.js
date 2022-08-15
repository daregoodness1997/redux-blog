import React from 'react';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostsExcerpt = ({ post }) => {
  return (
    <article >
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
