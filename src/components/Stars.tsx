import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  const stars = Array.from({ length: count }).map((_, i) => {
    return i;
  });

  return (
    <div className='flex space-x-0.5'>
      {stars.map((star) => {
        return <AiFillStar key={star} color='#f57f17' />;
      })}
    </div>
  );
};

export default Stars;
