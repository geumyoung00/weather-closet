import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { AuthCredentials, AuthResponse } from '../../types/auth';
import { auth } from '../../firebase';

export const login = () => {};

export const signup = async (credentials: AuthCredentials, name: string) => {
  // create an account.
  const response = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

  // set the name of the user.
  await updateProfile(response.user, { displayName: name });

  return response;
};
