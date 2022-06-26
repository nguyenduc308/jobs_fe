import * as React from 'react';
import Header from '@/components/layout/partials/Header';

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main mt-10'>{children}</main>
    </div>
  );
}
