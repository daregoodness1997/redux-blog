import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: 'I have known redux before, just wanted to try it out',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Active Learning Module',
    content: 'My active learning project is up and running',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const SelectAllPosts = state => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
