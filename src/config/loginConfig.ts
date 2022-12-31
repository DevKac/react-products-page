import User from '../domain/interfaces/user';
import UserCredentials from '../domain/interfaces/userCredentials';

export const StorageUserKey: string = 'user';

export const CorrectUserCredentials: UserCredentials = {
  username: 'test',
  password: 'test123'
}

export const LoggedInUser: User = {
  id: 1,
  name: 'Testowy 123',
}
