import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import SingleUser from './features/users/SingleUser';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path=':postId/edit' element={<EditPostForm />} />
        </Route>
        <Route path='user'>
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<SingleUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
