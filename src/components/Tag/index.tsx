import React, { ReactNode } from 'react';

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className='tag'>
      {children}
    </span>
  );
};

export default Tag;