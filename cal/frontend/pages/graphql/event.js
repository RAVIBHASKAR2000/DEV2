import { gql } from '@apollo/client';




// bookings{
//     title
//     description
// }


// availability{
//     label
//     date
// }
// eventName

// timeZone

// periodType
// periodStartDate
// periodEndDate
// periodDays
// periodCountCalendarDays
// requiresConfirmation
// minimumBookingNotice



export const GET_ALL_EVENTS = gql`
    query 
    getAllEvents{
   
    allEventTypes {
      id
      title
      slug
      description
      
      length
      hidden
      user{
          name
          email
        }
           
      }
    }`;
 
    export const GET_CURRENT_EVENT = gql`
    query GetEventTypeDetails($event: ID!) {
      EventType(where: { id: $event }) {
        id
        title
        slug
        description
        length
        hidden
        eventName
        user{
            name
            email
          }
        timeZone
        periodDays

        }
      }
    `;
 
 export const CREATE_EVENT = gql`
 mutation 
 CreateEventType($eventName: String!, $title: String!, 
   $description: String!, $length : Int! , $timeZone :String! , $periodDays : Int! ) 
 {

   createEventType(data: { eventName: $eventName, title: $title, description: $description, 
     length: $length, timeZone: $timeZone, periodDays: $periodDays}) 
   {
       id
     }
}
`;

export const DELETE_EVENT= gql`
mutation deleteEventType($id: ID!) {
  deleteEventType(id: $id ) {
    id
  }
}
`;

