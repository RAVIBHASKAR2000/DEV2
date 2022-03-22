/** @jsx jsx */
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { jsx } from '@emotion/core';
import { Container, Loading, H2, H3 } from '../primitives';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

import { useAuth } from '../lib/authentication';
import { Button, Field, Label, Input } from '../primitives/forms';
import { gridSize, colors } from '../theme';
import { CREATE_USER } from '../graphql/users';

const onChange = handler => e => handler(e.target.value);

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setStata] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [insta, setInsta] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { isAuthenticated, signin } = useAuth();

  const handleSubmit = createUser => event => {
    event.preventDefault();
    createUser({ variables: { name, email, password, city, state, twitter, facebook, insta } });
  };

  const handleSignin = async () => {
    setIsLoading(true);
    try {
      await signin({ variables: { email, password } });
      setIsLoading(false);
      setErrorState(false);
    } catch (error) {
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
       
      <Meta title="Register" />
      <Navbar background="#f96c07" />
      <Container css={{ marginTop: gridSize * 3 }}> 

      {mutationError && <p css={{ color: colors.red }}>The email provided is already in use.</p>}
      {errorState && <p css={{ color: colors.red }}>An unknown error has occurred</p>}
        
      <form css={{ marginTop: gridSize * 3, }} noValidate onSubmit={handleSubmit(createUser)}>
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

        <Field>
          <Label htmlFor="city">City</Label>
          <Input
            autoComplete="city"
        
            disabled={isLoading || isAuthenticated}
            id="city"
            onChange={onChange(setCity)}
            placeholder="Your City"
            
            type="text"
            value={city}
          />
        </Field>

        <Field>
          <Label htmlFor="state">State</Label>
          <Input
            autoComplete="state"
        
            disabled={isLoading || isAuthenticated}
            id="state"
            onChange={onChange(setStata)}
            placeholder="Your State"
            
            type="text"
            value={state}
          />
        </Field>


          <Field>
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            autoComplete="twitter"
            
            disabled={isLoading || isAuthenticated}
            id="twitter"
            onChange={onChange(setTwitter)}
            placeholder="Twitter"
            
            type="text"
            value={twitter}
          />
        </Field>


        <Field>
        <Label htmlFor="facebook">Facebook handle</Label>
        <Input
          autoComplete="facebook"
        
          disabled={isLoading || isAuthenticated}
          id="facebook"
          onChange={onChange(setFacebook)}
          placeholder="Facebook Handle"
          
          type="text"
          value={facebook}
        />
      </Field>

      <Field>
        <Label htmlFor="insta">Insta handle</Label>
        <Input
          autoComplete="insta"
          
          disabled={isLoading || isAuthenticated}
          id="insta"
          onChange={onChange(setInsta)}
          placeholder="Insta Handle"
          
          type="text"
          value={insta}
        />
      </Field>



        {isLoading ? (
          <Button disabled>Creating account...</Button>
        ) : (
          <Button type="submit">Sign up</Button>
        )}
      </form>
      </Container>
      <Footer />
    </>
  );
};
