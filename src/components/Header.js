import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsCount, increaseCount } from '../features/posts/postsSlice';

const Header = () => {
  const count = useSelector(getPostsCount);
  const dispatch = useDispatch();
  return (
    <header>
      <h1>Blog Post</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='user'>Users</Link>
          </li>
          <li>
            <Link to='post'>Post</Link>
          </li>
        </ul>
      </nav>
      {/* <button onClick={() => dispatch(increaseCount())}>{count}</button> */}
    </header>
  );
};

export default Header;
