import { useSelector, useDispatch } from 'react-redux';

import React, { useEffect } from 'react';
import {
  SelectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(SelectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

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

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
