import UserCredentials from '../../domain/interfaces/userCredentials';
import User from '../../domain/interfaces/user';
import { CorrectUserCredentials, LoggedInUser } from '../../config/loginConfig';

// TODO: delay symulujący BE
async function login(userCredentials: UserCredentials): Promise<User> {
  if (userCredentials && userCredentials.username === CorrectUserCredentials.username && userCredentials.password === CorrectUserCredentials.password) {
    return await Promise.resolve(LoggedInUser);
  } else {
    return await Promise.reject('Incorrect credentials'); // TODO: error code?
  }
}

export default login;
