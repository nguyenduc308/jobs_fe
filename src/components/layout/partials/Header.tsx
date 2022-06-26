import * as React from 'react';
import { BsBookmark, BsBell } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/jobs', label: 'Find Projects' },
  { href: '/', label: 'Reports' },
  { href: '/', label: 'My Contracts' },
  { href: '/', label: 'Request Projects' },
];

export default function Header() {
  return (
    <header className='border-b bg-white' style={{ height: '60px' }}>
      <div className='layout flex h-14 items-center justify-between'>
        <h1>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            Flatcun
          </UnstyledLink>
        </h1>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className='font-medium hover:text-green-800'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className='user-area flex'>
          <ul className='flex items-center justify-between space-x-3 text-gray-500'>
            {/*<li>*/}
            {/*  <UnstyledLink href='#' className='hover:text-gray-600'>*/}
            {/*    <BsBell />*/}
            {/*  </UnstyledLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <UnstyledLink href='#' className='hover:text-gray-600'>*/}
            {/*    <BsBookmark />*/}
            {/*  </UnstyledLink>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <UnstyledLink href='#' className='hover:text-gray-600'>*/}
            {/*    <MdOutlineMarkEmailUnread*/}
            {/*      style={{ height: '1.4em', width: '1.4em' }}*/}
            {/*    />*/}
            {/*  </UnstyledLink>*/}
            {/*</li>*/}
            <li>
              <UnstyledLink
                  href='/auth/login'
                  className='font-medium hover:text-green-800'
              >
                Đăng nhập
              </UnstyledLink>
            </li>
            <li>
              <UnstyledLink
                  href='/auth/register'
                  className='font-medium hover:text-green-800'
              >
                Đăng ký
              </UnstyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
