/** @jsx jsx */
import { useQuery, useLazyQuery } from '@apollo/client';
import getConfig from 'next/config';
import { jsx } from '@emotion/core';
import Slider from 'react-slick';

import Link from 'next/link';
import EventItems from '../components/EventItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import { GET_CURRENT_EVENTS } from '../graphql/events';
import { GET_EVENT_RSVPS } from '../graphql/rsvps';
import { GET_CAROUSEL } from '../graphql/carousel';
import { initializeApollo } from '../lib/apolloClient';
import Button from '../primitives/Button'
import Rsvp from '../components/Rsvp';
import {
  AvatarStack,
  Container,
  Error,
  Hero,
  Html,
  Loading,
  MicrophoneIcon,
  PinIcon,
  UserIcon,
} from '../primitives';
import { H2, H3 ,H5} from '../primitives/Typography';
import { colors, gridSize, fontSizes } from '../theme';
import {
  isInFuture,
  formatFutureDate,
  formatPastDate,
  getForegroundColor,
  pluralLabel,
} from '../helpers';
import { mq } from '../helpers/media';

const { publicRuntimeConfig } = getConfig();


const slickSettings = {
  dots: true,
  speed: 500,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  autoplay: true, /* this is the new line */
  autoplaySpeed: 3000,
  rows: 1,
  
};


// Featured Event
const FeaturedEvent = ({ isLoading, error, event }) => {
  const [
    getResponses,
    { data: { allRsvps = [] } = {}, called, loading: queryLoading, error: queryError },
  ] = useLazyQuery(GET_EVENT_RSVPS);

  // event is null while the outer query is fetching it
  if ((isLoading && !event) || queryLoading) {
    return <Loading isCentered />;
  }

  // Error fetching the event, show nothing
  if (error) {
    console.error('Failed to render the featured event', error);
    return null;
  }

  // Event is loaded but somehow still null. Bail.
  if (!isLoading && !event) {
    return null;
  }

  // Call the query now that we know event is valid
  if (!called) {
    getResponses({ variables: { event: event.id } });
  }

  const { description, id, locationAddress, maxRsvps, name, startTime, talks, themeColor, heading } = event;
  const prettyDate = isInFuture(startTime)
    ? formatFutureDate(startTime)
    : formatPastDate(startTime);

  const hex = themeColor ? themeColor.slice(1) : null;
  const attending = `${allRsvps.length}${maxRsvps ? `/${maxRsvps}` : ''}`;

  return (
    <Container css={{ margin: '-7rem auto 0', position: 'relative' }}>
      
      <div css={{ boxShadow: '0px 4px 94px rgba(0, 0, 0, 0.15)', }}>
        <div
          css={{
            background:'linear-gradient(90deg, rgba(255,128,0,1) 21%, rgba(255,137,137,0.9836309523809523) 100%)', borderRadius:'8px',
            color: getForegroundColor(themeColor),
            display: 'block',
            padding: '2rem',
          }}
        >
          <div css={mq({ display: 'flex', flexDirection: ['column', 'row'] })}>
            <div
              css={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
                  <div css={{width:'180px'}}>
                      <p
                      css={{
                        textTransform: 'uppercase',
                        marginTop: 0,
                        fontWeight: 500,
                        marginBottom: gridSize,
                      }}
                    >
                      {prettyDate}
                    </p>
                    
                    <Link href={`/event/[id]?hex=${hex}`} as={`/event/${id}?hex=${hex}`} passHref>
                      <a
                        css={{
                          color: 'inherit',
                          textDecoration: 'none',
                          ':hover': { textDecoration: 'underline' },
                        }}
                      > 
                      
                        <H3 >{name}</H3>
                      </a>
                    </Link>
                  </div>

              <p css={{ alignItems: 'center', display: 'flex', fontWeight: 1000, fontSize:fontSizes.md }}>
                <PinIcon css={{ marginRight: '0.5em' }} />
                {locationAddress}
              </p>
      
            </div>


            <div>
                      
                  <H3 css={{textAlign:'center', fontStyle:'italic'}} >{heading}</H3>     
                  <Html
                  markup={description}
                  css={mq({
                    flex: 2,
                    padding: [0, '0 2rem'],

                    p: {
                      fontSize: fontSizes.sm,
                      fontStyle: 'italic',
                      fontWeight: 1000,
                      '&:first-of-type': { marginTop: 10 },
                      '&:last-of-type': { marginBottom: 0 },
                    },
                  })}
                />
               <div css={{ textAlign:'end'}}>
                      <Link href={`/event/[id]?hex=${hex}`} as={`/event/${id}?hex=${hex}`} passHref>
                          <Button 
                          css={{padding:'0.7rem',
                                ':hover': { textDecoration: 'underline' },
                        
                                    }}><H5>Read More</H5></Button>
                      </Link>
                </div>   
              
                  
            </div>
            
          
          </div>
      
        </div>
      </div>
    </Container>
  );
};

function processEventsData(data) {
  if (!data || !data.upcomingEvents || !data.previousEvents) {
    return {
      featuredEvent: null,
      moreEvents: [],
    };
  }

  const upcomingEvents = data.upcomingEvents.slice();
  const previousEvents = data.previousEvents.slice();

  const featuredEvent = upcomingEvents.length ? upcomingEvents.pop() : previousEvents.pop() || null;
  const moreEvents = [];

  for (let i = 0; i < 3; i++) {
    if (upcomingEvents.length) {
      moreEvents.push(upcomingEvents.pop());
    } else if (previousEvents.length) {
      moreEvents.push(previousEvents.pop());
    }
  }

  return {
    featuredEvent,
    moreEvents,
  };
}

const Home = ({ now }) => {
  const { meetup } = publicRuntimeConfig;

  const {
    data: eventsData = {},
    loading: eventsLoading,
    error: eventsError,
  } = useQuery(GET_CURRENT_EVENTS, { variables: { now } });

  
  const { data: {  allCarousels: carouselData = [] } = {}, loading, error } = useQuery(
    GET_CAROUSEL
  );
 
  

  const { featuredEvent, moreEvents } = processEventsData(eventsData);
  const carousel = carouselData.map((obj)=>{
    return(
        <div>
        <img src={obj.image.publicUrl} width="100%" height="500"></img>
        </div>
    )
  })

  return (
    <div>
      <Meta titleExclusive={meetup.name} description={meetup.intro} />
      <Navbar background={colors.greyDark} />

      
      <Hero css={{
      background:'linear-gradient(180deg, rgba(249,108,7,1) 0%, rgba(223,151,22,1) 50%, rgba(228,255,225,0.9836309523809523) 100%)',
                 }}>
             
               <div css={{
                 
                  justifyContent:'center',
               }}>
               <div>
                  <Html css={{
                    marginTop:'6rem',  
                    color: '#ffffff',
                    lineHeight: 1.5,
                    letterSpacing:4,
                    fontSize: fontSizes.xxl,
                    textDecoration:'underline',
                    
                  }}
                  markup={meetup.homeIntro} />
               </div>
                

               </div>  
              

             
            <Slider {...slickSettings} >
              {carousel}

            </Slider>
       
      
      </Hero>
      <FeaturedEvent  isLoading={eventsLoading} error={eventsError} event={featuredEvent} />
      
      <Container css={{ marginTop: '3rem' }}>
        {featuredEvent && featuredEvent.talks ? <Talks talks={featuredEvent.talks} /> : null}
      </Container>
      
     
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const now = new Date().toISOString();
  await apolloClient.query({
    query: GET_CURRENT_EVENTS,
    variables: { now },
  });
  await apolloClient.query({
    query: GET_CAROUSEL,
    
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      now,
    },
    revalidate: 1,
  };
}

export default Home;

// styled components

const Section = props => (
  <section
    css={{
      position: 'relative',
    }}
    {...props}
  />
);
const Slant = ({ fill, height = 5, placement }) => {
  const points = placement === 'bottom' ? '0, 100 0, 0 100, 0' : '0 100, 100 0, 100, 100';

  return (
    <svg
      css={{
        height: `${height}vw`,
        width: '100vw',
        display: 'block',
        position: 'absolute',
        [placement]: `-${height}vw`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill={fill} points={points} />
    </svg>
  );
};
