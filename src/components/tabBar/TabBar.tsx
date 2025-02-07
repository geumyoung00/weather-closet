import TabButton from './TabButton';
import styles from './tabBar.module.scss';

export default function TabBar() {
  const authRoot = {
    /* 
    *login 여부를 판단해서 root 결정
      a. default : /signIn
      b. login : /users
    */
  };

  return (
    <>
      <aside className={styles['tab-bar']}>
        <TabButton href='locations'>위치 설정</TabButton>
        <TabButton href='signIn'>사용자 메뉴</TabButton>
      </aside>
    </>
  );
}
