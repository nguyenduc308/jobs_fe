import * as React from 'react';

import Default from '@/components/layout/Default';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Default>
      <Seo templateTitle='Home' />
      Body
    </Default>
  );
}
