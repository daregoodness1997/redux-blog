import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
import React from 'react';

const reactionEmoji = {
  thumbsUp: 'Up',
  wow: 'Wow',
  heart: 'Heart',
  rocket: 'Rocket',
  coffee: 'Coffee',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {`${emoji}  ${post.reactions[name]}`}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
