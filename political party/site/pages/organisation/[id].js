/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../lib/apolloClient';
import Rsvp from '../../components/Rsvp';
import { Avatar, Container, Error, Hero, H1, H2,H3,H4, Html, Loading, PinIcon } from '../../primitives';
import Talks from '../../components/Talks';
import Navbar from '../../components/Navbar';
import { SocialIcon } from 'react-social-icons';

import Footer from '../../components/Footer';
import Meta, { makeMetaUrl } from '../../components/Meta';
import {  colors,fontSizes, shadows, gridSize } from '../../theme';
import { GET_CURRENT_POSTS} from '../../graphql/organisation';
import { isInFuture, formatFutureDate, formatPastDate, stripTags } from '../../helpers';
import { mq } from '../../helpers/media';


function Organisationpost({ currentposts }) {

  
 // const { data, loading, error } = useQuery( GET_CURRENT_POSTS, { variables: { post : id } });

 const data= currentposts;
  console.log(data);


  const Card =() =>{
    return(
      <div>
          <div  css={{
            display: 'flex',
           
            boxShadow: '0 14px 18px 0 rgba(0, 0, 0, 0.5), 0 16px 20px 0 rgba(0, 0, 0, 0.19)',
            background: '#fffff',
            height: '450px',
            marginBottom: '3rem',
            
          }}>
              <div css={{
                  width:'40%',
                  position: 'relative',
                  height:"auto" ,
                  clipPath: 'polygon(0 0, 100% 0%, 83% 100%, 0% 100%)'
              }}>
              {data.currentPrabhari.user.image ?
                <img src={data.currentPrabhari.user.image.publicUrl} alt="Prabhari Image" width="100%" height="100%" ></img> 
                :
                <img src={`https://via.placeholder.com/500?text=${data.currentPrabhari.user.name}`}  alt="Prabhari Image" ></img> 

              }
                  
              </div>

              <div css={{
                padding:'2rem',
              }}> 
              <H2>{data.currentPrabhari.user.name}</H2>
              <H3 css={{fontStyle:'italic', lineHeight:'5rem' }}>{data.prabharName}</H3>
                
              <p><h4 css={{display: 'inline'}}> <PinIcon css={{ marginRight: '0.5em' }} /> </h4> <H4 css={{ display:'inline'}}>{data.currentPrabhari.user.city} , {data.currentPrabhari.user.state}</H4></p>
              <p><H4 css={{display: 'inline'}}>From: {data.currentPrabhari.from}</H4></p>

             
              {(data.currentPrabhari.currentlyWorking== true)?
                <p><H4 css={{display: 'inline'}}>Till Date</H4>  </p>: <p><H4>Till:-{data.currentPrabhari.till}</H4></p>
              }
              
             
             
             <p><H4 css={{display: 'inline'}}>Contact: {data.currentPrabhari.mobile}</H4></p>
             
             <div css={{display: 'flex'}}>
                <div>
                  <a href={data.currentPrabhari.user.facebookHandle}><img src="../../static/social/facebook.png" width="50" height="50"></img></a>
                </div>
                <div>
                  <a href={data.currentPrabhari.user.twitterHandle}><img src="../../static/social/twitter.png" width="50" height="50"></img></a>
                </div>
                <div>
                  <a href={data.currentPrabhari.user.instaHandle}><img src="../../static/social/instagram.png" width="50" height="50"></img></a>
                </div> 
            </div>
             
            </div>

          </div>
      </div>
    );
  }


  return (
    <>
    <Meta title="PRABHARI" description={"Post details"} />
        
      <Navbar background={colors.greyDark} />
      <Container css={{ marginTop: gridSize * 3 }}>
        
          { data.currentPrabhari?
            
            <>
            <Card/>
            </>
            : <H3 css={{padding:'3rem'}}>No Current Prabhari</H3>
          }
          
         
     

        </Container>

      <Footer />
    </>
  );
};


export const getServerSideProps = async ({params}) => {
 
  console.log(params);
  const apolloClient = initializeApollo();

  const currentPosts = await apolloClient.query({
    query: GET_CURRENT_POSTS,
    variables: {post : params.id }
  });

  return {
    props: { currentposts: currentPosts.data.allPrabhars[0]}
  };
};

export default Organisationpost;
