import Link from 'next/link';
import styles from './tabBar.module.scss';

export default function TabButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <>
      <Link href={`/${href}`} className={styles['tab-button']}>
        <span>{children}</span>
      </Link>
    </>
  );
}
