import gql from "graphql-tag";


export const PRABHAR_DATA = gql`
fragment PrabharData on Prabhar {
    id
    prabharName
    city
    state
  
    prabharLevel
    currentPrabhari{
            id
            user{
              id 
              name
              image{ publicUrl }
              city
              state
              twitterHandle
              facebookHandle
              instaHandle
                
                }
            from
            till
            currentlyWorking
            
            mobile
            prabhar{
                  id
                }
        }
}
`;


export const GET_ALL_POSTS = gql`
  {
    allPrabhars {
      ...PrabharData
    }
  }
  ${PRABHAR_DATA}
`;




export const PRABHARI_DATA = gql`
fragment PrabhariData on Prabhar {
  id
  user
  from
  till
 
  currentlyWorking
  mobile
  prabhar
 
}
`;


export const GET_ALL_PRABHARI = gql`
  {
    allPrabhari {
      ...PrabhariData
    }
  }
  ${PRABHARI_DATA}
`; 
 
export const GET_PRABHARI_DETAILS = gql`
query  GetPrabhariDetails($post: ID!) {
	allPrabharis(where: {prabhar: {id : $post }}){
    id
    user {
        id
        name
       
      }
    from
    till
    currentlyWorking
    mobile
   
    prabhar{
      id
       prabharName
      }
    
    }
}
`;


export const GET_CURRENT_POSTS= gql`
query GetCurrentPosts($post: ID!){
	allPrabhars(where: {id : $post }){
      id
      prabharName
      city
      state

      prabharLevel
      currentPrabhari{
              id
              user{
                  id 
                  name
                  image{ publicUrl }
                  city
                  state
                  twitterHandle
                  facebookHandle
                  instaHandle
                  
                  }
              from
              till
              currentlyWorking
              
              mobile
              prabhar{
                    id
                  }
        }
      }
  }
`;


