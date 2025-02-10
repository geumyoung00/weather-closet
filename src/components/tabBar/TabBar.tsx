'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import TabButton from './TabButton';
import styles from './tabBar.module.scss';

export default function TabBar() {
  /**
   *login 여부를 판단해서 root 결정
   *a. default : /signIn
   *b. login : /users
   */

  const { isLoggedIn } = useAuth();
  const pathname = usePathname();

  return (
    <>
      {pathname.includes('sign') ? (
        ''
      ) : (
        <aside className={styles['tab-bar']}>
          <TabButton href='locations'>위치 설정</TabButton>
          <TabButton href={isLoggedIn ? 'users' : 'signin'}>사용자 메뉴</TabButton>
        </aside>
      )}
    </>
  );
}
