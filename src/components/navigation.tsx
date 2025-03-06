'use client';

import styled from 'styled-components';
import { Wrapper } from './wrapper';
import Link from 'next/link';

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
  return (
    <NavWrapper as='section'>
      <nav>
        <Link href={'/users'}>사용자 메뉴</Link>
        <Link href={'/locations'}>위치 설정</Link>
      </nav>
    </NavWrapper>
  );
}
