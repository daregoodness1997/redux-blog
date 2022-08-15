import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'I have known redux before, just wanted to try it out',
  },
  {
    id: '2',
    title: 'Active Learning Module',
    content: 'My active learning project is up and running',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const SelectAllPosts = state => state.posts;

export default postsSlice.reducer;
