import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, selectPostById, deletePost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const post = useSelector(state => selectPostById(state, Number(postId)));
  const [values, setValues] = useState({
    title: post?.title,
    content: post?.body,
    userId: Number(post?.userId),
    requestStatus: 'idle',
  });

  const canUpdate =
    values.title !== post?.title ||
    values.content !== post?.body ||
    values.userId !== post?.userId;

  const canSave =
    [values.title, values.content, values.userId].every(Boolean) &&
    values.requestStatus === 'idle' &&
    canUpdate;

  const onSavePostSubmitted = e => {
    e.preventDefault();
    if (canSave) {
      try {
        setValues({ ...values, requestStatus: 'pending' });
        dispatch(
          updatePost({
            ...values,
            id: post.id,
            body: values.content,
            reactions: post.reactions,
          })
        ).unwrap();
        navigate(`/post/${postId}`);
      } catch (err) {
        console.log('Failed to save the post', err);
      } finally {
        setValues({ ...values, requestStatus: 'idle' });
      }
    }
    setValues({ title: '', content: '', userId: '' });
  };

  const onDeletePostClick = () => {
    try {
      setValues({ ...values, requestStatus: 'pending' });
      dispatch(deletePost({ id: post.id })).unwrap();
      navigate(`/`);
    } catch (err) {
      console.log('Failed to delete the post', err);
    } finally {
      setValues({ ...values, requestStatus: 'idle' });
    }
  };

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  if (!post) {
    return (
      <section>
        <h2>Post not Found</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>Edit Post</h2>
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
          defaultValue={values.userId}
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
          Update Post
        </button>
      </form>
      <button
        style={{ width: '100%', background: 'red', color: 'white' }}
        onClick={() => onDeletePostClick()}
      >
        Delete Post
      </button>
    </section>
  );
};

export default EditPostForm;
