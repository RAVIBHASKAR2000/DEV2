/** @jsx jsx */

import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { jsx,css } from '@emotion/core';

import { useAuth } from '../lib/authentication';
import { Field, Label, Input } from '../primitives/Forms';
import Button from '../primitives/Button'
import { gridSize, colors } from '../theme';
import { CREATE_USER } from '../gql/users';

const onChange = handler => e => handler(e.target.value);

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { isAuthenticated, signin, user } = useAuth();

  const handleSubmit = createUser => event => {
    event.preventDefault();
    createUser({ variables: { name, email, password } });
    document.body.style.overflow = 'auto';
  };


  const handleSignin = async () => {
    setIsLoading(true);
    try {
      await signin({ variables: { email, password } });
      setIsLoading(false);
      console.log('singup completed')
      setErrorState(false);
    } catch (error) {
      console.log('singup not completed')
      setErrorState(true);
    }
  };

  // if the user is logged in, redirect to the homepage
  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  const [createUser, { error: mutationError }] = useMutation(CREATE_USER, {
    onCompleted: handleSignin,
  });

  return (
    <>
      {mutationError && <p css={{ color: colors.red }}>The email provided is already in use.</p>}
      {errorState && <p css={{ color: colors.red }}>An unknown error has occurred</p>}

      <form css = {css`
      marginTop: ${gridSize * 3};
      @media(max-width: 700px) {
        padding: 1rem;
      }
      `} noValidate onSubmit = {handleSubmit(createUser)}>
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            autoComplete="name"
            autoFocus
            disabled={isLoading || isAuthenticated}
            id="name"
            onChange={onChange(setName)}
            placeholder="full name"
            required
            type="text"
            value={name}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            autoComplete="email"
            disabled={isLoading || isAuthenticated}
            id="email"
            onChange={onChange(setEmail)}
            placeholder="you@awesome.com"
            required
            type="text"
            value={email}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            autoComplete="password"
            disabled={isLoading || isAuthenticated}
            id="password"
            minLength="8"
            onChange={onChange(setPassword)}
            placeholder="supersecret"
            required
            type="password"
            value={password}
          />
        </Field>

        {isLoading ? (
          <Button padding = '0.7rem 1.4rem' borderRadius = '5px' color = 'white' disabled>Creating account...</Button>
        ) : (
          <Button padding = '0.7rem 1.4rem' borderRadius = '5px' color = 'white' type="submit">Sign up</Button>
        )}
      </form>
    </>
  );
};