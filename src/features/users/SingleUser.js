import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from './usersSlice';
import { SelectAllPosts, selectPostsByUser } from '../posts/postsSlice';

const SingleUser = () => {
  const { userId } = useParams();

  const user = useSelector(state => selectUserById(state, Number(userId)));

  // const postsForUser = useSelector(state => {
  //   const allPosts = SelectAllPosts(state);
  //   return allPosts.filter(post => post.userId === Number(userId));
  // });

  const postsForUser = useSelector(state =>
    selectPostsByUser(state, Number(userId))
  );

  const renderedpostTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>
      <ol>{renderedpostTitles}</ol>
    </section>
  );
};

export default SingleUser;
