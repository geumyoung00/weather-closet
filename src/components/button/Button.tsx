import styles from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Button({
  children,
  color,
  link,
  type,
}: {
  children: React.ReactNode;
  color?: string;
  link?: boolean;
  type?: boolean;
}) {
  return (
    <div className={cx('btn', { [color as string]: color })}>
      {link ? (
        <>{children}</>
      ) : (
        <button>
          <span>{children}</span>
        </button>
      )}
    </div>
  );
}
