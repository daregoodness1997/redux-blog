import { useSelector } from 'react-redux';

import React from 'react';
import { SelectAllPosts, getPostsStatus, getPostsError } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
  const posts = useSelector(SelectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;

  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPost.map(post => (
      <PostsExcerpt post={post} key={post.id} />
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{postsError}</p>;
  }

  return <section className='postList'>{content}</section>;
};

export default PostsList;
