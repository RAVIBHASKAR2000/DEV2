/** @jsx jsx */

import { useState } from 'react';
import { jsx, css } from '@emotion/core';


import { useAuth } from '../lib/authentication';
import { Field, Group, Label, Link, Input } from '../primitives/Forms';
import Button from '../primitives/Button'
import { gridSize, colors } from '../theme';

const onChange = handler => e => handler(e.target.value);

export default ({ onSuccess, onClickForgot }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { isAuthenticated, signin } = useAuth();

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);
    try {
      await signin({ variables: { email, password } });
      document.body.style.overflow = 'auto';
      setIsLoading(false);
      setErrorState(false);
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      setErrorState(true);
    }
  };

  return (
    <>
      {errorState && (
        <p css={{ color: colors.red }}>Please check your email and password then try again.</p>
      )}

      <form 
      css = {css`
      marginTop: ${gridSize * 3};
      @media(max-width: 700px) {
        padding: 1rem;
      }
      `}
      noValidate onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            autoComplete="email"
            autoFocus
            disabled={isLoading || isAuthenticated}
            onChange={onChange(setEmail)}
            placeholder="you@awesome.com"
            required
            type="text"
            value={email}
            id="email"
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

        <Group>
          {isLoading ? (
            <Button padding = '0.7rem 1.4rem' borderRadius = '5px' color = 'white' disabled>Signing in...</Button>
          ) : (
            <Button padding = '0.7rem 1.4rem' borderRadius = '5px' color = 'white' type="submit">Sign in</Button>
          )}
          {/* <Link href="/forgot-password" onClick={onClickForgot}>
            Forgot password
          </Link> */}
        </Group>
      </form>
    </>
  );
};