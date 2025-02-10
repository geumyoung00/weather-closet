import styles from './form.module.scss';

export default function FormError({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className={styles['error-message']}>{children}</p>
    </>
  );
}
