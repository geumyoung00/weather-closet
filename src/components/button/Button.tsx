import styles from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Button({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <div className={cx('btn', color)}>
      <button>
        <span>{children}</span>
      </button>
    </div>
  );
}
