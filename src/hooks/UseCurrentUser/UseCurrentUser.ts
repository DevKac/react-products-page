import { useState } from 'react';

import User from '../../domain/interfaces/user';
import { StorageUserKey } from '../../config/loginConfig';

export default function useCurrentUser() {
  function getCurrentUser(): User {
    const localStorageUserInfo: string | null = localStorage.getItem(StorageUserKey);

    return localStorageUserInfo? JSON.parse(localStorageUserInfo) : null;
  };

  function saveCurrentUser(user?: User) {
    if (!user) {
      localStorage.removeItem(StorageUserKey);
      setCurrentUser(null);
    } else {
      localStorage.setItem(StorageUserKey, JSON.stringify(user));
      setCurrentUser(user);
    }
  }

  const [currentUser, setCurrentUser] = useState<User | null>(getCurrentUser());

  return {
    currentUser,
    setCurrentUser: saveCurrentUser
  }
}
