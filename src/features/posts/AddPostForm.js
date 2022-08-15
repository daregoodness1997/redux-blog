import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const [values, setValues] = useState({ title: '', content: '' });
  let dispatch = useDispatch();

  const onSavePostSubmitted = e => {
    e.preventDefault();
    dispatch(postAdded({ ...values, id: nanoid() }));
    setValues({ title: '', content: '' });
  };

  console.log(values);

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
        <label htmlFor='postContent'>Content</label>
        <textarea
          name='postContent'
          id='postContent'
          value={values.content}
          required
          onChange={e => setValues({ ...values, content: e.target.value })}
        />

        <button type='submit'>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
