import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Alex Wande' },
  { id: '1', name: 'Jose Alvarez' },
  { id: '2', name: 'Will Smithes' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;
export default userSlice.reducer;
