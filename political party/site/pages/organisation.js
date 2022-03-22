/** @jsx jsx */

import { jsx } from '@emotion/core';
import Head from 'next/head'
import { Container, Html,Loading, H1,H2,H4, H3 ,H5,PinIcon} from '../primitives';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { colors, gridSize, fontSizes, shadows  } from '../theme';
import { GET_ALL_POSTS } from '../graphql/organisation';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import Link from 'next/link';
import { mq } from '../helpers/media';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Organisation() {
  
  const hex = "black";
const {
  data: postsData = {},
  loading: postsLoading,
  error: postsError,
} = useQuery(GET_ALL_POSTS );



//console.log(postsData);
//console.log(postsData.allPosts[0].currentPrabhari.user.name)


const NationalPost= postsData.allPrabhars.map((post)=>{
  if(post==null){
    <div>
    
    </div>
  }
  else{
    //console.log(post);
     if(post.prabharLevel==="National"){
      return(
    
        <div
        css={{
          background:'white',
          boxShadow: '0 10px 15px  rgba(0, 0, 0, 0.5), 0 -12px 15px 0 rgba(0, 0, 0, 0.19)',
        
         
          margin: `${gridSize * 2}px`,
          padding: `${gridSize * 3}px ${gridSize * 3}px 0`,
          position: 'relative',
          transition: 'all 0.1s',
          width:250,
          borderRadius: '3%',

          '&:hover': {
            
            transform: 'translateY(-2px)',
          },
          '&:active': {
            
            transform: 'none',
          },
        }}
       
      > 
        <div css={{ height: 320,  overflow: 'hidden' }}>
              <Link  href={`/organisation/[id]`} as={`/organisation/${post.id}`} passHref >
                <a
                  css={{
                    color: 'inherit',
                    textDecoration: 'none',
    
                    ':hover h3': {
                      textDecoration: 'underline',
                    },
                  }}
                >

                {post.currentPrabhari?
                  <>
                      <div css={{
                        textAlign:'center',
                          marginRight:'auto',
                          marginLeft: 'auto'
                          
                      }}>  

                          {post.currentPrabhari.user.image!=null ?
                            <img css={{ borderRadius: '50%'}} src={post.currentPrabhari.user.image.publicUrl} alt="Prabhari Image" width="150" height="150" ></img> 
                            :
                            <img css={{ borderRadius: '50%'}} src={`https://via.placeholder.com/100?text=${post.currentPrabhari.user.name}`}  alt="Prabhari Image" width="150" height="150"  ></img> 
            
                          } 
                      </div> 


                   <H4 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'0.5rem',  marginTop:'0.5rem'}}>{post.currentPrabhari.user.name}</H4>

                   <H5 as="div" css={{ textTransform: 'uppercase', marginBottom: '1rem', textAlign:'center' }}>
                         <H5 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'0.5rem',  marginTop:'0.5rem'}}>{post.prabharName}</H5>
                        <PinIcon css={{ marginRight: '0.5em' }} /> {post.state}
                   </H5>

                   <div css={{display: 'flex', justifyContent:'center' ,}}>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.facebookHandle}><img src="../static/social1/facebook.png" width="40" height="40"></img></a>
                        </div>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.twitterHandle}><img src="../static/social1/twitter.png" width="40" height="40"></img></a>
                        </div>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.instaHandle}><img src="../static/social1/instagram.png" width="40" height="40"></img></a>
                        </div> 
                    </div>
                   
                   
                   </>

                   :  

                      <>
                      <div css={{
                        textAlign:'center',
                        marginRight:'auto',
                        marginLeft: 'auto',
                        
                        borderRadius: '50%',
                        
                      }}>  
                          <img css={{ borderRadius: '50%'}} src='https://via.placeholder.com/100?text=N/A'  alt="Prabhari Image" width="150" height="150"  ></img> 
                      </div> 
                      <H4 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'1.5rem',  marginTop:'1rem'}}>{post.prabharName}</H4>
                      <H5 css={{textTransform:'uppercase', textAlign:'center'}}>सौंपा नहीं गया है</H5>
                   </>
                }
          
                </a>
              </Link>
            </div>
            </div>
        
      );
     }
  
   }
})

const StatePosts= postsData.allPrabhars.map((post)=>{
  if(post.prabharLevel==="State")
  if(post==null){
    <div>
      पद सौंपा नहीं गया
    </div>
  }
  else{
    //console.log(post);
     if(post.prabharLevel==="State"){
      return(
    
        <div
        css={{
          background:'white',

          boxShadow: '0 10px 15px  rgba(0, 0, 0, 0.5), 0 -12px 15px 0 rgba(0, 0, 0, 0.19)',
          margin: `${gridSize * 2}px`,
          padding: `${gridSize * 3}px ${gridSize * 3}px 0`,
          position: 'relative',
          transition: 'all 0.1s',
          width:250,
          borderRadius: '3%',

          '&:hover': {
            
            transform: 'translateY(-2px)',
          },
          '&:active': {
            
            transform: 'none',
          },
        }}
       
      > 
        <div css={{ height: 320,  overflow: 'hidden' }}>
              <Link  href={`/organisation/[id]`} as={`/organisation/${post.id}`} passHref >
                <a
                  css={{
                    color: 'inherit',
                    textDecoration: 'none',
    
                    ':hover h3': {
                      textDecoration: 'underline',
                    },
                  }}
                >

                {post.currentPrabhari?
                  <>
                      <div css={{
                        textAlign:'center',
                          marginRight:'auto',
                          marginLeft: 'auto'
                          
                      }}>  

                          {post.currentPrabhari.user.image ?
                            <img css={{ borderRadius: '50%'}} src={post.currentPrabhari.user.image.publicUrl} alt="Prabhari Image" width="150" height="150" ></img> 
                            :
                            <img css={{ borderRadius: '50%'}} src={`https://via.placeholder.com/100?text=${post.currentPrabhari.user.name}`}  alt="Prabhari Image" width="150" height="150"  ></img> 
            
                          } 
                      </div> 


                   <H4 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'0.5rem',  marginTop:'0.5rem'}}>{post.currentPrabhari.user.name}</H4>

                   <H5 as="div" css={{ textTransform: 'uppercase', marginBottom: '1rem', textAlign:'center' }}>
                   <H5 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'0.5rem',  marginTop:'0.5rem'}}>{post.prabharName}</H5>

                   <PinIcon css={{ marginRight: '0.5em' }} /> {post.state}
                   </H5>
                  
                   
                   <div css={{display: 'flex', justifyContent:'center'}}>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.facebookHandle}><img src="../static/social1/facebook.png" width="40" height="40"></img></a>
                        </div>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.twitterHandle}><img src="../static/social1/twitter.png" width="40" height="40"></img></a>
                        </div>
                        <div css={{marginLeft:'1rem'}}>
                          <a href={post.currentPrabhari.user.instaHandle}><img src="../static/social1/instagram.png" width="40" height="40"></img></a>
                        </div> 
                    </div>
                   
                   
                   </>

                   :  

                      <>
                      <div css={{
                        textAlign:'center',
                        marginRight:'auto',
                        marginLeft: 'auto',
                        
                        borderRadius: '50%',
                        
                      }}>  
                          <img css={{ borderRadius: '50%'}} src='https://via.placeholder.com/100?text=N/A'  alt="Prabhari Image" width="150" height="150"  ></img> 
                      </div> 
                       <H5 css={{textTransform:'uppercase', textAlign:'center' , marginBottom:'0.5rem',  marginTop:'1rem'}}>{post.prabharName}</H5>
                    
                      <h2 css={{textTransform:'uppercase', textAlign:'center'}}>सौंपा नहीं गया है</h2>
                   </>
                }
          
                </a>
              </Link>
            </div>
            </div>
        
      );
     }
  
   }
})





  return (
      <>
      <Meta title="organisation" />
      <Head>
      <style>{globalStyle}</style>
     </Head>
      <Navbar background={colors.greyDark} />
      
      
      <Container css={{ marginTop: gridSize * 3 }}>
      
      <H2 hasSeparator css={{ marginBottom: '0.66em',  color:'#f06d16'}}>
        संस्था
      </H2>
        <div css={{
          marginTop:'3rem',
          marginBottom:'3rem'
        }}>
        
        
        <H2 css={{marginTop:'3rem', marginBottom:'2rem',  color:'#f06d16'}}>राष्ट्रीय स्तर</H2>
       <div css={{
         display: 'flex',
         flexDirection:'row',
         flexWrap: 'wrap',
         justifyContent:'center'

       }}>
       {NationalPost}
       </div>

       <H2  css={{marginTop:'5rem', marginBottom:'2rem', color:'#f06d16'}}>राज्य स्तर</H2>
       
       <div css={{
         display: 'flex',
         flexDirection:'row',
         flexWrap: 'wrap',
         justifyContent:'center'
         

       }}>
       {StatePosts}
       </div>

      
    
        </div>
      </Container>
      <Footer />
      </>
    );
  
}


export async function getStaticProps() {
  const apolloClient = initializeApollo();

  
  await apolloClient.query({
    query: GET_ALL_POSTS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
     
    },
    revalidate: 1,
  };
}

const globalStyle = `
body {
    background-color: white;
}
`