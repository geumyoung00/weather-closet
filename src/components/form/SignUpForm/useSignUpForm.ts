import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { auth } from '../../../firebase';
import { validateEmail, validateName, validatePassword } from '@action/validate';
import { useRouter } from 'next/navigation';
import { signup } from '../../../api/auth';

interface FormState {
  name: string;
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

type FormType = 'email' | 'password' | 'name';

export const useSignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formState;
  const [errors, setErrors] = useState<FormErrors>({ email: '', password: '', name: '' });

  const router = useRouter();

  const onChangeInput = useCallback(
    (key: FormType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (key) {
        setFormState((prev) => ({ ...prev, [key]: value }));
      }
    },
    []
  );

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    if (isLoading || name === '' || email === '' || password === '') return;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }, [formState.email, formState.password, formState.name]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // create an account.
      const credentials = await signup({ email, password }, name);
      console.log(credentials.user);
    } catch (e) {
      //setErrors
    } finally {
      // redirect to the home page.
      setIsLoading(false);
      router.push('/');
    }
  };

  return { isLoading, formState, onChangeInput, handleSubmit, errors };
};
