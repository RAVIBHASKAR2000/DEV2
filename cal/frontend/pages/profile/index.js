/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';

import { useQuery } from '@apollo/client';


import Navbar from '../components/Navbar'; 

import { initializeApollo } from '../lib/apolloClient';

import { colors, gridSize, fontSizes } from '../../theme';

import { GET_ALL_USERS } from '../graphql/proflie';
import { gql } from '@apollo/client';

const GET_REGISTERED_USERS = gql`
    query {
        allUsers {
            id
            name
            email
            language
            country
            timezone
        }
    }`
;

export default function index() {

  const { data, loading, error } = useQuery(GET_REGISTERED_USERS);
  console.log(data);
  if (loading) {
      return <h2> Loading... </h2>;
  }

  if (error) {
      console.error(error);
      return null;
  }

  const allUsers = data.allUsers;
  console.log(allUsers);
  return (
      <div>
          {allUsers.map((user) => (
              <div key={user.id}>
                  <h3> {user.name} </h3>{" "}
                  <p>
                      {" "}
                      {user.email} {user.language} {user.country} {user.timezone}{" "}
                  </p>{" "}
              </div>
          ))}
      </div>
  );
}
 
