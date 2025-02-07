import styles from './container.module.scss';

export default function Container({ children, isMain }: { children: React.ReactNode; isMain?: boolean }) {
  const type = isMain ? styles.main : '';

  return <section className={`${styles.container} ${type}`}>{children}</section>;
}
