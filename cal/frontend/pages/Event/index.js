/** @jsxRuntime classic */
/** @jsx jsx */

import React,{useState} from 'react';
import { jsx } from '@emotion/react';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar'; 
import { initializeApollo } from '../lib/apolloClient';
import { colors, gridSize, fontSizes, borderRadius } from '../../theme';
import { GET_ALL_EVENTS, DELETE_EVENT } from '../graphql/event';
import { CREATE_EVENT } from '../graphql/event';
import Link from "next/link";
import { useMutation } from '@apollo/client';
import {
  Edit,
  Delete
} from "react-feather"


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Field, Input ,Label , Checkbox }  from '../primitives/forms';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const onChange = handler => e => handler(e.target.value);


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});




export default function index() {
  const {
    data,
    loading,
    error,
  } = useQuery(GET_ALL_EVENTS );

  
  const allEventTypes = data.allEventTypes;
  

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  
    // cards
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;


  const [eventName, setEventName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [length, setLength] = useState(0);
  const [timeZone, setTimeZone] = useState('');
  const [periodDays, setPeriodDays] = useState(0);


  // *********
  const handleSubmit = createEventType => event => {
    event.preventDefault();
    console.log( eventName, title, description, length, timeZone, periodDays);
    createEventType({ variables: { eventName, title, description, length, timeZone, periodDays} });
  };

   
  const [createEventType, { error: mutationError }] = useMutation(CREATE_EVENT, {
   // onCompleted: handleSignin,
     refetchQueries: ["getAllEvents"]
  });
  //************ *

  const handleEdit=  id => event => {
    event.preventDefault();
    deleteEventType({ variables: { id}});
  };

  const [deleteEventType, { error: mutationError2 }] = useMutation(DELETE_EVENT, {
    // onCompleted: handleSignin,
    refetchQueries: ["getAllEvents"]
   });

  return (
      <div>
      <h1 css={{ marginLeft:'2rem',marginBottom: '0.66em',color:'#f06d16' }}>Events</h1>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} css={{float:'right'}}>
        <Edit/> Create Events
      </Button>
      {mutationError && <p css={{ color: colors.red }}>mutation error</p>}
      {mutationError2 && <p css={{ color: colors.red }}>mutation error Delete</p>}
 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Create New Event Type"}</DialogTitle>
        <DialogContent>
         
        <form css={{ marginTop: gridSize * 3, }} noValidate onSubmit={handleSubmit(createEventType)}>
        <Field>
          <Label htmlFor="eventName">Event Name</Label>
          <Input
            autoComplete="Event Name"
            autoFocus
            
            id="eventName"
            onChange={onChange(setEventName)}
            placeholder="Event Name"
            required
            type="text"
            value={eventName}
          />
        </Field>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input
           
           
            id="title"
            onChange={onChange(setTitle)}
        
          
            type="text"
            value={title}
          />
        </Field>

        <Field>
          <Label htmlFor="description">Description</Label>
          <Input
            
            id="description"
            
            onChange={onChange(setDescription)}
           
           
            type="text"
            value={description}
          />
        </Field>

        <Field>
          <Label htmlFor="length">Length</Label>
          <Input
            
            id="length"
             
            onChange={(e) => {
              setLength(parseInt(e.target.value));
            }}
            placeholder="Minutes "
            
            type="integer"
            value={length}
          />
        </Field>

        <Field>
          <Label htmlFor="timezone">Time Zone</Label>
          <Input
            
            id="timezone"
            onChange={onChange(setTimeZone)}
            placeholder="Your Timezone" 
            type="text"
            value={timeZone}
          />
        </Field>


          <Field>
          <Label htmlFor="periodDays">Invitee can reschedule meeting till</Label>
          <Input
           
            id="periodDays"
            onChange={(e) => {
              
              setPeriodDays(parseInt(e.target.value));
            }}
            placeholder="30"
            
            type="integer"
            value={periodDays}
          />
        </Field>
        
          <Button color="primary" type="submit">
            Save
          </Button>
      </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           cancel
          </Button>
        
        </DialogActions>
      </Dialog>







      {loading ? (
        <h2> Loading </h2>
      ) : error ? (
        <p>Something went wrong. Please try again.</p>
      ) : (
        <React.Fragment>



        <div css={{margin:'2rem'}}>
          <div css={{display:'flex',flexWrap:"wrap"}}>

          {allEventTypes.map((event) => (

           
             <Card sx={{ width: 200 }}
                  key={event.id} 
                  css={{border:'1px solid black',
                  
                    borderRadius:'8px', 
                    margin:'1rem',
                    cursor:'pointer',
                    width:'300px',
                    height:'250px',

                    '&:hover': {
            
                      transform: 'translateY(-2px)',
                    },
                    

                  }}>
                    <Button variant="outlined" color="primary" onClick={handleEdit(event.id)} css={{float:'right'}}>
                      <Delete/>
                    </Button> 
                  
                 <Link  href={`/Event/[id]`} as={`/Event/${event.id}`} passHref > 
                  <div css={{
                    padding:'2rem',
                  }}>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <p>{event.length}: Min</p>
                      <p>One-on-one</p>
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
    query: GET_ALL_EVENTS,
    
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
     
    },
    revalidate: 1,
  };
}
