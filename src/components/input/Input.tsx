import styles from './input.module.scss';

export default function Input({
  label,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={label} />
      <input
        id={label}
        type={type ? type : 'text'}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={type === 'password' ? 'current-password' : ''}
      />
    </div>
  );
}
