/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import NavbarWrap from "../primitives/Navbar";
import NavLink from "../primitives/Link";
import { useContext, createContext, forwardRef } from "react";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Text from '../primitives/Heading';
import Hamburger from "../primitives/Hamburger";
import Link from "next/link";

import Button from "../primitives/Button";
import Login from "./modals/loginModal";

import {
 
  LogIn,
  Home,
  Star,
  Film,
   PhoneCall,
  Layers,
  User,
  Calendar
} from "react-feather";

import { colors } from "../../theme";

import { useAuth } from "../lib/authentication";
import { LogOut } from "react-feather";

const Navbar = () => {
  const [ham, setHam] = useState(false);
 
  //const [searchText, setSearchText] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const { isAuthenticated, user, signout } = useAuth();
  //const {totalItems, getCarts} = useCart();

  
  const mobileRef = useRef();
  

  useEffect(() => {
    if (loginModal) {
      setHam(false);
    }
  }, [loginModal]);

  useEffect(() => {
    if (isAuthenticated) {
      setLoginModal(false);
    }
  }, [isAuthenticated]);


  const logout = () => {
    signout();
    if (
      window.location.pathname.includes("my-contribution") ||
      window.location.pathname.includes("draft")
    ) {
      Router.push("/");
    }
  };

//   const searchItem = e => {
//     e.preventDefault();
//     Router.push({
//       pathname: "/search",
//       query: { q: searchText }
//     });
//     setSearchText("");
//   };



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

  
  return (
    <NavbarWrap>
    {loginModal && <Login setModal={setLoginModal} modal={loginModal} />}
      <div
        css={{
          display: "flex",
          alignItems: "center",
          width: "90%",
          margin: "auto",
          zIndex: "5",
          height: "100%"
        }}
      >
        <Link href={"/"}>
          <a>
            <h1
              css={{
                color: colors.theme,
                margin: "0",
                cursor: "pointer",
                marginRight: "2rem"
              }}
            >
              Calesendo
            </h1>
          </a>
        </Link>

        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 1131px) {
              display: none;
            }
          `}
        >
          <Link href={"/"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                css={css`
                  margin-right: 2rem;
                 
                `}
              >
                <Home/>
                <span css={{ padding: "0.3rem",  }}> Home</span>
              </NavLink>
            </a>
          </Link>

          <Link href={"/Event"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
              >
                <Star/>
                <span css={{ padding: "0.3rem" }}>Events Type </span>
              </NavLink>
            </a>
          </Link>
          <Link href={"/Booking"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
              >
               <Calendar/>
                <span css={{ padding: "0.3rem" }}>Bookings </span>
              </NavLink>
            </a>
          </Link>
          <Link href={"/category"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
              >
               <Film/>
                <span css={{ padding: "0.3rem" }}>Product Tour </span>
              </NavLink>
            </a>
          </Link>
          
          <Link href={"/category"}>
          <a>
            <NavLink
              hoverColor={colors.theme}
              fontSize="1.1rem"
              margin="0 2rem 0 0"
            >
             <PhoneCall />
              <span css={{ padding: "0.3rem" }}> Contact Us </span>
            </NavLink>
          </a>
        </Link>
         

        </div>

        <div
          css={css`
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 1131px) {
              display: none;
            }
          `}
        >
        
          {isAuthenticated ? (
            <>
            <Link href={"/profile"}>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                css={{ display: "flex", border: '1px solid orange', padding :'0.4rem', 
                paddingTop:'.3rem' ,paddingBottom:'.3rem', borderRadius:'8%', }}

              >
              <span css={{marginRight:"0.5rem"}}>
                  <User/>
                </span>
              
                <span >{user.name.split(" ")[0]}</span> 
                
               
               
              </NavLink>
              </Link>

              <NavLink
                hoverColor={colors.theme}
                margin="0 0 0 3rem"
                fontSize="1.1rem"
                onClick={logout}
                css={{ display: "flex" }}
              >
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <LogOut size={20} />
                </div>
                <p css={{ margin: "0", marginLeft: "0.5rem" }}>Logout</p>
              </NavLink>
            </>
          ) : (
            <NavLink
              hoverColor={colors.theme}
              fontSize="1.1rem"
              onClick={() => setLoginModal(true)}
            >
              {" "}
              Log In
              <LogIn />
            </NavLink>
          )}
        </div>

        <Hamburger onClick={() => setHam(!ham)}>
          <div
            css={css`
              width: 30px;
              height: 3px;
              background: black;
              margin: 2.5px 0;
            `}
          ></div>
          <div
            css={css`
              width: 30px;
              background: black;
              height: 3px;
              margin: 2.5px 0;
            `}
          ></div>
          <div
            css={css`
              width: 30px;
              background: black;
              height: 3px;
              margin: 2.5px 0;
            `}
          ></div>
        </Hamburger>
      </div>

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
          background: white;
          transform: translate(100%, 0);
          transition: all 0.5s ease;
          @media (min-width: 1131px) {
            display: none;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            width: 100%;
            height: 80%;
            // margin-top: 6rem;
            align-items: center;
            flex-direction: column;
            @media (min-width: 1131px) {
              display: none;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              background: ${colors.theme};
              width: 100%;
              min-height: 60px;
              align-items: center;
            `}
          >
            {isAuthenticated ? (
              <Link href={"/profile"}>
              <NavLink  fontSize="1.2rem" padding="0 1rem">
                Hello. {user.name.split(" ")[0]}
              </NavLink>
              </Link>
            ) : (
              <NavLink
                fontSize="1.2rem"
                onClick={() => setLoginModal(true)}
                padding="0 1rem"
              >
                Hello. Sign In
              </NavLink>
            )}
          </div>

         
          <Link href={"/"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                css={css`
                  margin-right: 2rem;
                  margin-bottom: 1.5rem;
                `}
              >
              
                <span css={{ padding: "0.3rem" }}> Home</span>
              </NavLink>
            </a>
          </Link>

          <Link href={"/Event"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
                css={css`
                  margin-right: 2rem;
                  margin-bottom: 1.5rem;
                `}
              >
               
                <span css={{ padding: "0.3rem" }}> Events Type </span>
              </NavLink>
            </a>
          </Link>
          <Link href={"/Booking"}>
          <a>
            <NavLink
              hoverColor={colors.theme}
              fontSize="1.1rem"
              margin="0 2rem 0 0"
              css={css`
                margin-right: 2rem;
                margin-bottom: 1.5rem;
              `}
            >
             
              <span css={{ padding: "0.3rem" }}>Bookings </span>
            </NavLink>
          </a>
        </Link>

          <Link href={"/"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
                css={css`
                  margin-right: 2rem;
                  margin-bottom: 1.5rem;
                `}
              >
               
                <span css={{ padding: "0.3rem" }}>Product Tour </span>
              </NavLink>
            </a>
          </Link>
          <Link href={"/"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
                css={css`
                margin-right: 2rem;
                margin-bottom: 1.5rem;
              `}
              >
                
                <span css={{ padding: "0.3rem" }}>Contact Us </span>
              </NavLink>
            </a>
          </Link>
          
          {isAuthenticated && 
            <NavLink hoverColor={colors.theme}
              fontSize="1.1rem"
              margin="0 2rem 0 0"
             onClick={signout}>  <LogOut size={20} /> Logout</NavLink>}
        </div>
      </div>
    </NavbarWrap>
  );
};

export default Navbar;
