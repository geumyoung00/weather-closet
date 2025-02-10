'use client';

import Input from '@components/input/Input';
import styles from '../form.module.scss';
import classNames from 'classnames/bind';
import Button from '@components/button/Button';
import FormError from '../FormError';
import { useSignUpForm } from './useSignUpForm';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const { isLoading, formState, onChangeInput, handleSubmit, errors } = useSignUpForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label='name'
          onChange={onChangeInput('name')}
          name='name'
          value={formState.name}
          placeholder='Name'
          required
        />
        <Input
          label='email'
          onChange={onChangeInput('email')}
          name='email'
          value={formState.email}
          placeholder='Email'
          required
        />
        <Input
          label='password'
          onChange={onChangeInput('password')}
          type='password'
          value={formState.password}
          name='password'
          placeholder='Password'
          required
        />
        <Button>{isLoading ? 'Loading...' : '회원가입'}</Button>
      </form>
      {errors.name !== '' ? (
        <FormError>{errors.name}</FormError>
      ) : errors.email !== '' ? (
        <FormError>{errors.name}</FormError>
      ) : errors.password !== '' ? (
        <FormError>{errors.password}</FormError>
      ) : null}
    </>
  );
}
