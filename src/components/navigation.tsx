'use client';

import styled from 'styled-components';
import { Wrapper } from './wrapper';
import Link from 'next/link';
import { useParams } from 'react-router-dom';
import { usePathname } from 'next/navigation';

const NavWrapper = styled(Wrapper)`
  max-width: var(--max-width);
  min-width: var(--min-width);
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 165, 0, 0.6);

  nav {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Navigation() {
  const path = usePathname();
  const routes = {
    '/user': { href: '/users', label: '사용자 메뉴' },
    '/node_moduleslocations': { href: '/locations', label: '위치 설정' },
  };
  const currentPath = Object.entries(routes).find(([key]) => path.includes(key));

  return (
    <NavWrapper as='section'>
      <nav>
        {currentPath ? (
          <>
            <Link href={currentPath[1].href}>{currentPath[1].label}</Link>
            <Link href={'/'}>홈으로</Link>
          </>
        ) : (
          <>
            {Object.entries(routes).map(([key, { href, label }]) => {
              return (
                <Link key={key} href={href}>
                  {label}
                </Link>
              );
            })}
          </>
        )}
      </nav>
    </NavWrapper>
  );
}
