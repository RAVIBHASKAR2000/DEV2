
import { gql } from '@apollo/client';




export const GET_ALL_BOOKINGS = gql`
query 

getAllBookings{
   
  allBookings{
    id
    uid
    title
    user{
      id
      name
    }
    
    eventType{
      id
      title
    }
    description
    startTime
    endTime
    attendees{
      id
      email
      name
    }
    location
    
    createdAt
    updatedAt
  }
}`;




export const DELETE_BOOKING= gql`
mutation DeleteBookings($id: [ID!]) {
  deleteBookings(ids: $id ) {
    id
  }
}
`;
