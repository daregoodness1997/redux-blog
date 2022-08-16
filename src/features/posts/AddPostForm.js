import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [values, setValues] = useState({
    title: '',
    content: '',
    userId: '',
    requestStatus: 'idle',
  });

  const users = useSelector(selectAllUsers);

  const canSave =
    [values.title, values.content, values.userId].every(Boolean) &&
    values.requestStatus === 'idle';

  const onSavePostSubmitted = e => {
    e.preventDefault();
    if (canSave) {
      try {
        setValues({ ...values, requestStatus: 'pending' });
        dispatch(addNewPost({ ...values, body: values.content })).unwrap();
        navigate('/');
      } catch (err) {
        console.log('Failed to save the post', err);
      } finally {
        setValues({ ...values, requestStatus: 'idle' });
      }
    }
    setValues({ title: '', content: '', userId: '' });
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add Post</h2>
      <form onSubmit={onSavePostSubmitted}>
        <label htmlFor='postTitle'>Post Title</label>
        <input
          type='text'
          name='postTitle'
          id='postTitle'
          value={values.title}
          required
          onChange={e => setValues({ ...values, title: e.target.value })}
        />

        <label htmlFor='postAuthor'>Author:</label>
        <select
          id='postAuthor'
          name='postAuthor'
          value={values.userId}
          onChange={e => setValues({ ...values, userId: e.target.value })}
        >
          <option value=''></option>
          {userOptions}
        </select>
        <label htmlFor='postContent'>Content</label>
        <textarea
          name='postContent'
          id='postContent'
          value={values.content}
          required
          onChange={e => setValues({ ...values, content: e.target.value })}
        />

        <button type='submit' disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
