/** @jsx jsx */

import { useContext, createContext, forwardRef } from 'react';
import getConfig from 'next/config';
import { jsx , css } from '@emotion/core';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { useAuth } from '../lib/authentication';
import { SignoutIcon, Loading } from '../primitives';
import { getForegroundColor, useLogoDimension } from '../helpers';
import { mq } from '../helpers/media';
import { fontSizes, gridSize, shadows } from '../theme';
import AuthModal from './auth/modal';
import { useState, useEffect, useRef } from "react";
import Hamburger from "../primitives/Hamburger";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const { publicRuntimeConfig } = getConfig();
const { meetup } = publicRuntimeConfig;


const NavAnchor = forwardRef((props, ref) => {
  const { foreground } = useTheme();
  const paddingHorizontal = [gridSize, gridSize, gridSize * 3];
  const paddingVertical = gridSize;

  return (
    <a
      ref={ref}
      css={mq({
        color: 'white',
        display: 'inline-block',
        fontSize: fontSizes.md,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        paddingBottom: paddingVertical,
        paddingTop: paddingVertical,
        textDecoration:'none',
        

        ':hover': {
          textDecoration: 'none',
          transform: 'scale(1.1)'
        },
      })}
      {...props}
    />
  );
});

const NavLink = ({ href, as, ...props }) => (
  <Link href={href} as={as} passHref>
    <NavAnchor {...props} />
  </Link>
);
const NavButton = props => (
  <NavLink
    css={mq({
      backgroundColor: meetup.themeColor,
      border: 'none',
      borderRadius: 40,
      color: getForegroundColor(meetup.themeColor),
      fontSize: fontSizes.md,
      fontWeight: 400,
      lineHeight: 1,
      marginRight: [0, 0],
      padding: '.6rem 1rem',
     
      

    })}
    {...props}
  />
);

const NavText = props => {
  const { foreground } = useTheme();
  return <span css={{ color: foreground, fontSize: fontSizes.sm }} {...props} />;
};

export const HEADER_GUTTER = [gridSize * 2, gridSize * 6];

const Header = props => {
  const { background } = useTheme();

  return (
    <header
      css={mq({
        alignItems: 'center',
        background: '#353536',
        display: 'flex',
        paddingLeft: HEADER_GUTTER,
       
      })}
      {...props}
    />
  );
};

const hideOnMobile = mq({
  display: ['none', 'none', 'initial'],
});

// TODO: Implement log out
const UserActions = ({ user }) => {
  const { signout } = useAuth();
  const onSignout = event => {
    event.preventDefault();
    signout();
  };

  return (
    <div>
      {['su', 'admin'].includes(user.role) && (
        <NavAnchor css={hideOnMobile} href="/admin" target="_blank">
          Dashboard
        </NavAnchor>
      )}
      <span css={{ alignItems: 'center', display: 'inline-flex' }}>
        <NavText css={hideOnMobile}>
          <strong><h3>{user.name}</h3></strong>
        </NavText>
        <NavLink href="/signout" title="Sign Out" onClick={onSignout}>
          <SignoutIcon />
        </NavLink>
      </span>
    </div>
  );
};

const AnonActions = () => {
  return (
      <>
    
      <AuthModal mode="signin">
        {({ openModal }) => (
          <NavLink href="/signin" onClick={openModal}>
            Sign in
          </NavLink>
        )}
      </AuthModal>
      
      <NavLink href="/register">Register</NavLink>
       
    </>
  );
};

const Navbar = ({ background = 'white', ...props }) => {
  const [ham, setHam] = useState(false);
  const { isAuthenticated, user, isLoading } = useAuth();
  const { logoWidth, logoHeight, logoWidthSm, logoHeightSm } = useLogoDimension();
  const mobileRef = useRef(); 

  useEffect(() => {
    const mobileNavbar = mobileRef.current;
    if (ham) {
      mobileNavbar.style.transform = "translate(0,0)";
      mobileNavbar.style.boxShadow = "4px -17px 37px 2px rgba(0,0,0,0.48)";
      document.body.style.overflow = "hidden";
    } else {
      mobileNavbar.style.transform = "translate(100%,0)";
      mobileNavbar.style.boxShadow = "none";
      document.body.style.overflow = "auto";
    }
  }, [ham]);

  useEffect(() => {
    const closeHam = e => {
      if (ham) {
        if (e.clientX < window.innerWidth * 0.25) {
          setHam(false);
        }
      }
    };
    window.addEventListener("click", closeHam);
    return window.addEventListener("click", closeHam);
  }, [ham]);

  const foreground = getForegroundColor(background);

  return (
    <ThemeContext.Provider value={{ background, foreground }}>
      <Header {...props}>
      
        <Link href="/" passHref>
          <a>
            <img
              src={meetup.logo.src}
              width={logoWidth}
              height={logoHeight}
              alt={meetup.name}
              css={mq({
               
                marginRight: [gridSize, gridSize * 2],
                width: [logoWidthSm, logoWidth],
                height: [logoHeightSm, logoHeight],
              })}
            />
          </a>
        </Link>
        <div css={css`
        display:'flex';
        @media (max-width: 700px) {
         display: none;}
         width:'100%',`
       }>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contactus">Contact Us</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/organisation">Organisation</NavLink>
      </div>
      <span css={css`
      @media (max-width: 700px) {
        display: none;}`
      }> 
      {isLoading ? <Loading /> : isAuthenticated ? <UserActions user={user} /> : <AnonActions />}
      </span>
     
          <Hamburger onClick={() => setHam(!ham)}>
          <div
            css={css`
              width: 30px;
              height: 3px;
              background: black;
              margin: 3px 0;
            `}
          ></div>
          <div
            css={css`
              width: 30px;
              background: black;
              height: 3px;
              margin: 3px 0;
            `}
          ></div>
          <div
            css={css`
              width: 30px;
              background: black;
              height: 3px;
              margin: 3px 0;
            `}
          ></div>
        </Hamburger>
  
        <div
          ref={mobileRef}
          css={css`
            position: absolute;
            top: 0;
            right: 0;
            z-index: 4;
            height: 100vh;
            width: 75%;
            position: fixed;
            background: #353535;
            background: #fa513e;
            transform: translate(100%, 0);
            transition: all 0.5s ease;
            @media (min-width: 700px) {
              display: none;
            }
          `}
        >
       
       <div
         css={css`
           display: flex;
           justify-content: center;
           width: 100%;
           height: 80%;
            margin-top: 4rem;
           align-items: center;
           flex-direction: column;
           @media (min-width: 700px) {
             display: none;
           }
         `}
       >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contactus">Contact Us</NavLink>
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/organisation">Organisation</NavLink>
        
        {isLoading ? <Loading /> : isAuthenticated ? <UserActions user={user} /> : <AnonActions />}
            
      </div>
    </div>
   
      


      </Header>
    </ThemeContext.Provider>
  );
};

export default Navbar;
