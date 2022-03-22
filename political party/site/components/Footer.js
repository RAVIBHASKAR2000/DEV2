/** @jsx jsx */
import { jsx } from '@emotion/core';
import getConfig from 'next/config';
import { SocialIcon } from 'react-social-icons';
import { Button, Html } from '../primitives';
import { colors, gridSize, shadows } from '../theme';
import { getForegroundColor } from '../helpers';
import { mq } from '../helpers/media';

const { publicRuntimeConfig } = getConfig();

const Footer = ({ callToAction = true }) => {
  const { meetup } = publicRuntimeConfig;
  const marginTop = (callToAction ? 16 : 32) * gridSize;
 
  const button = {
    bg: meetup.themeColor,
    fg: getForegroundColor(meetup.themeColor),
  };

  return (
    <div css={{ position:'relative' }}>
      
      <section
        css={{
          background: colors.greyDark,
          color: 'white',
          padding: `${gridSize * 0}px 0`,
          
          a: {
            color: 'white',
            fontWeight: 600,
          },
        }}
      >

      <div css={{
         display:'flex',
         flexDirection	:'row',
          justifyContent:'center',
          alignItems:'center',
          alignContent:'stretch'

        }}>
            <div>
                <img
                src={meetup.logo.src}
                width={meetup.logo.width}
                height={meetup.logo.height}
                alt={meetup.name}
                css={{ marginRight: gridSize * 5 }}
                />
            </div>

            <div>
              <Html markup={meetup.footer.copyrightText} />
            </div>

        </div>
       
        
        <div >
                
        
                <span css={mq({
                  position: 'absolute',
                  right: '1%',
                   bottom: '5%',
                  
                })}>
                      <SocialIcon url={meetup.gmail} style={{ height: 30, width: 30 }} />
                 </span>


                <span css={mq({
                  position: 'absolute',
                  right: '1%',
                  bottom: '30%',
                 
                })}>
                    <SocialIcon url={meetup.facebookHandle} style={{ height: 30, width: 30 }}/>
                </span>


                <span css={mq({
                  position: 'absolute',
                  right: '1%',
                  bottom: '60%',              

                })}>
                    <SocialIcon url={meetup.twitterHandle} style={{ height: 30, width: 30 }}/>
                </span>
                
         </div>
      </section>
    </div>
  );
};

const CallToAction = props => {
  const paddingHorizontal = ['2rem', '6rem'];
  const paddingVertical = '2rem';

  return (
    <div
      css={mq({
        background: [null, 'white'],
        boxShadow: [null, shadows.lg],
        boxSizing: 'border-box',
        margin: '0 auto',
        maxWidth: 800,
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingTop: paddingVertical,
        position: 'relative',
        textAlign: 'center',
        zIndex: 2,
      })}
      {...props}
    />
  );
};



export default Footer;
