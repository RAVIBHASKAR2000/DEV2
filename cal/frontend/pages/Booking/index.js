/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar'; 
import { initializeApollo } from '../lib/apolloClient';
import { colors, gridSize, fontSizes, borderRadius } from '../../theme';
import { GET_ALL_BOOKINGS, DELETE_BOOKING } from '../graphql/booking';
import { useMutation } from '@apollo/client';
import Link from "next/link";

import {
  Edit,
  Delete
} from "react-feather"

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { GET_ALL_EVENTS } from '../graphql/event';





export default function index() {
  const {
    data,
    loading,
    error,
  } = useQuery(GET_ALL_BOOKINGS );

  
  const allBookings = data.allBookings;
  console.log(allBookings);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
    // cards
    // const classes = useStyles();
  
    const handleEdit=  id => event => {
      event.preventDefault();
       deleteBookings({ variables: { id}});
    };
 
    const [deleteBookings, { error: mutationError2 }] = useMutation(DELETE_BOOKING, {
      // onCompleted: handleSignin,
      refetchQueries: ["getAllBookings"]
     });

  return (
      <div>
      <h1 css={{ marginLeft:'2rem',marginBottom: '0.66em',color:'#f06d16' }}>Bookings</h1>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} css={{float:'right'}}>
        <Edit/> Create Bookings
      </Button>
     

      {loading ? (
        <h2> Loading </h2>
      ) : error ? (
        <p>Something went wrong. Please try again.</p>
      ) : (
        <React.Fragment>



        <div css={{margin:'2rem'}}>
          <div css={{display:'flex',flexWrap:"wrap"}}>

          {allBookings.map((book) => (

           
             <Card sx={{ width: 200 }}
                  key={book.id} 
                  css={{border:'1px solid black',
                  
                    borderRadius:'8px', 
                    margin:'1rem',
                    cursor:'pointer',
                    width:'300px',
                   
                    '&:hover': {
            
                      transform: 'translateY(-2px)',
                    },
                    

                  }}>
                    <Button variant="outlined" color="primary" onClick={handleEdit(book.id)} css={{float:'right'}}>
                      <Delete/>
                    </Button> 
                  
                 <Link  href={`/Booking/[id]`} as={`/Booking/${book.id}`} passHref > 
                  <div css={{
                    padding:'2rem',
                  }}>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>Event Type: {book.eventType.title}</p>
                     
                      <p>{book.startTime} </p>
                      <p>{book.endTime} </p>
                      <h4> Attendee - </h4>
                      <p>{book.attendees.email} </p>
                      <p>{book.attendees.name} </p>
                      <p> Booking Created At {book.createdAt} </p>
                      {book.updatedAt ? (
                        <p>Booking updated At {book.updatedAt} </p>
                      ) :  (
                        <p></p>
                      )}
                     
                  </div>
                  </Link>
              </Card>
              
          ))}  
          </div>
        </div>
        
        </React.Fragment>


      )}
    
      </div>
  )
}


export async function getStaticProps() {
  const apolloClient = initializeApollo();


  await apolloClient.query({
    query: GET_ALL_BOOKINGS,
    
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
     
    },
    revalidate: 1,
  };
}




