/** @jsx jsx */


import getConfig from 'next/config';
import { jsx } from '@emotion/core';
import Head from 'next/head'
import { Avatar, Container, Error, H1, H2, H3, Html, Loading } from '../primitives';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { colors, gridSize, fontSizes } from '../theme';

import { mq } from '../helpers/media';
import { H4 } from '../primitives/index';


const { publicRuntimeConfig } = getConfig();

export default function About() {
  const { meetup } = publicRuntimeConfig;
  
  return (
    <>
      <Meta title="About" description={meetup.aboutIntro} />
      <Head>
      <style>{globalStyle}</style>
  </Head>
      <Navbar background={colors.greyDark} />
      <Container css={{ marginTop: gridSize * 3 }}>
        <H2 css={{ marginBottom: '0.66em',color:'#f06d16' }}>
          About
        </H2>
        

        {meetup.about? (
          <Content>
          
              <H2  css={{marginBottom: '0.66em', marginTop: '1.22em' , textAlign:'center', color:'#f06d16'}}>
                  {meetup.abouttitle}
              </H2>

            
              
              <div css={{
                display:'flex',
                flex:1,
                justifyContent:'center',
                alignItems:'center'
                
              }}>
                <div css={{opacity:'0.8',
                  textAlign:'center',
                  lineHeight: 2,
                  letterSpacing: 1.5,
                  fontSize: fontSizes.md,
                  fontStyle:'italic',
                  color: '#fc270f',
                   width:'50%',
                  
                  }}>
                  
                  <H4 css={{display:'inline'}}>राष्ट्रीय अध्यक्: </H4>
                   <H3 css={{ textDecoration: 'underline', display:'inline'}}>श्री दिनेश प्रताप सिंह जी</H3>
                   <H4> MLC पुर्व प्रत्याशी लोकसभा रायबरेली उत्तर प्रदेश</H4>
                </div>
                <div css={{
                  width:'50%'
                }}>
                <img src="./static/leader1.jpeg" width="100%" height="auto"></img>
                </div>
              </div>
              <hr css={{height:'3px',
              color:'black',
              backgroundColor:'black',
              borderWidth:'0'
           }}></hr>

            <div css={{
              display:'flex',
              flex:1,
              
              
            }}>

                <div>
                        <p>                      
                        <br></br> 
                        <span><h3>{meetup.aboutsubtitle}</h3></span>
                        
                        <Html markup={meetup.about} />
                        <br></br>
                        <h3 css={{
                          color:'#e82d10',
                        }}>{ meetup.aboutnotetitle}</h3>{meetup.aboutnote}
                        </p>
                </div>
                
                <div css={{
                 marginTop:'auto',
                 marginBottom:'auto'   

                }}>
                        <img src="./static/abkmfounder1.jpg" width="100%" height="80%"></img>
                </div>
     
                
              
              
              </div>

          </Content>
        ) : null}
      </Container>
      <Footer />
    </>
  );
}


const Content = props => <div {...props} />;

const globalStyle = `
body {
    
}
`