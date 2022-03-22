/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import React from 'react'
import { GET_CURRENT_EVENT} from '../graphql/event';
import {colors} from '../../theme' 

function eventdetails({ currentevents }) {
    return (
        <div css={{margin:'5rem'}}>

        <h2>{currentevents.title}</h2>

        <div css={{display:'flex', margin:'1rem'}}>
          <div css={{fontWeight:'bold',width:'20%' }}>Event Name : </div>
          <div  css={{ height:'40px',width:'50%',fontStyle:'italic', border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}> {currentevents.eventName}</div>
        </div>

        <div css={{display:'flex',margin:'1rem'}}>
          <div css={{fontWeight:'bold' ,width:'20%'}}>Meeting length : </div> 
          <div  css={{height:'40px',width:'50%',fontStyle:'italic',  border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}>  {currentevents.length}:min </div>
        </div>

        <div css={{display:'flex',margin:'1rem'}}>
          <div css={{fontWeight:'bold',width:'20%'}}>Description : </div> 
          <div  css={{height:'40px',width:'50%',fontStyle:'italic',  border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}>  {currentevents.description}</div>
        </div>

       
        <div css={{display:'flex',margin:'1rem'}}>
          <div css={{fontWeight:'bold' ,width:'20%'}}>Time Zone : </div>
          <div  css={{height:'40px',width:'50%',fontStyle:'italic',  border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}>  {currentevents.timeZone} </div>
        </div>

        <div css={{display:'flex',margin:'1rem'}}>
          <div css={{fontWeight:'bold',width:'20%'}}>Invitees can schedule within </div> 
          {currentevents. periodDays ? (
            <div  css={{height:'40px',width:'50%',fontStyle:'italic',  border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}>  {currentevents. periodDays} Days</div>
           ) : (
            <div  css={{height:'40px',width:'50%',fontStyle:'italic', border:`1px solid ${colors.theme}`,background: colors.greyLight ,borderRadius:'5px',padding:'0.6rem', paddingLeft:'2rem', paddingRight:'2rem', display:'inline', }}> 30 Days</div>
        
          )}
          </div>
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
 
    console.log(params);
    const apolloClient = initializeApollo();
  
    const currentEvents = await apolloClient.query({
      query: GET_CURRENT_EVENT,
      variables: {event : params.id }
    });
  
    return {
      props: { currentevents: currentEvents.data.EventType}
    };
  };
  

export default eventdetails;
