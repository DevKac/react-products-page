import React, { useState } from 'react';

import UserCredentials from '../../domain/interfaces/userCredentials';

interface LoginFormProps {
  isLoading: boolean;
  loginFn: (userCredentials: UserCredentials) => void;
}

interface SigninForm {
  username: string,
  password: string,
  formValid: boolean
}

const defaulLoginForm: SigninForm = {
  username: '',
  password: '',
  formValid: false
}

function LoginForm({isLoading, loginFn}: LoginFormProps) {
	const [loginForm, setLoginForm] = useState<SigninForm>(defaulLoginForm);

	function validateLoginForm(loginForm: SigninForm): SigninForm {
    return {
      ...loginForm,
      formValid: Boolean(loginForm.username && loginForm.password)
    }
  }
  
  function onUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
    const name: string = event.target.name;
    const value: string = event.target.value;

    setLoginForm(validateLoginForm({...loginForm, [name]: value}));
  }
  
  function onSubmit(event: React.FormEvent): void {
		event.preventDefault();
    if (isLoading || !loginForm.formValid) {
      return;
    }

    loginFn({
      username: loginForm.username,
      password: loginForm.password
    });
    setLoginForm(defaulLoginForm);
	};

	return (
    <form onSubmit={ onSubmit }>
      <div className='form-group'>
        <label htmlFor='username'>Login</label>
        <input
          name='username'
          type='text'
          placeholder='Login...'
          value={ loginForm.username }
          onChange={ onUserInput }
        ></input>
      </div>

      <div className='form-group'>
        <label htmlFor='password'>Hasło</label>
        <input
          name='password'
          type='password'
          placeholder='Hasło...'
          value={ loginForm.password }
          onChange={ onUserInput }
        ></input>
      </div>

      <div className='form-submit'>
        { isLoading ?
          <span>Logowanie...</span> :
          <button type='submit' className={loginForm.formValid ? '' : 'disabled'}>
            Zaloguj
          </button>
        }
      </div>
    </form>
	);
};

export default LoginForm;