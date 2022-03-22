/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import NavbarWrap from "../primitives/Navbar";
import NavLink from "../primitives/Link";
import { useContext, createContext, forwardRef } from "react";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import Text from '../primitives/Heading'
import Hamburger from "../primitives/Hamburger";
import Link from "next/link";
import {useCart} from '../lib/cartProvider';
import Button from "../primitives/Button";
import Login from "./modals/loginModal";

import {
  Search,
  Gift,
  LogIn,
  TrendingUp,
  ShoppingCart,
  Layers,
  User,
} from "react-feather";

import { colors } from "../theme";

import { useAuth } from "../lib/authentication";
import { LogOut } from "react-feather";

const Navbar = () => {
  const [ham, setHam] = useState(false);
 
  const [searchText, setSearchText] = useState("");
  const [loginModal, setLoginModal] = useState(false);
  const { isAuthenticated, user, signout } = useAuth();
  const {totalItems, getCarts} = useCart();

  useEffect(() => {
    getCarts()
  },[])
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

  const searchItem = e => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: { q: searchText }
    });
    setSearchText("");
  };



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
              Inventory
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
                <TrendingUp />
                <span css={{ padding: "0.3rem" }}> Todays Deals</span>
              </NavLink>
            </a>
          </Link>

          <Link href={"/"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 2rem 0 0"
              >
                <Gift />
                <span css={{ padding: "0.3rem" }}>Offer Zone </span>
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
                <Layers />
                <span css={{ padding: "0.3rem" }}>Category </span>
              </NavLink>
            </a>
          </Link>

          <div
            className="icon"
            css={css`
              width: 30%;
              @media(max-width: 700px) {
                display: none;
              }
            `}
          >
            <form onSubmit={searchItem} css = {css`width: 100%; position: relative; `}>
                <input
                  css={css`
                    border: 2px solid #e1e4e8;
                    padding: 0.6rem 1.3rem;
                    padding-right: 2rem;
                    box-sizing: border-box;
                    background: whitesmoke;
                    width: 100%;
                     outline: none;
                    border-radius: 5px;
                    &:focus {
                      border: 2px solid ${colors.theme};
                    }
                  `}
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                />
                <div 
                onClick = {searchItem}
                css = {css`
                position: absolute;
                top: 0;
                right: 16px;
                color: gray;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                &:hover {
                  color: ${colors.theme};
                }
                `}>
                  <Search size={18} />
                </div>
            </form>
          </div>

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
        <div css = {css`
        position: relative;
        `}>
          <Link  href={"/cart"}>
            <a>
              <NavLink
                hoverColor={colors.theme}
                fontSize="1.1rem"
                margin="0 1rem 0 0"
              >
                <ShoppingCart />
                <span css={{ padding: "0.3rem" }}>Cart </span>
              </NavLink>
            </a>
          </Link>
          <div css = {css`
          position: absolute;
          top: -10px;
          right: 50px;
          height: 22px;
          width: 22px;
          border-radius: 50%;
          background: orange;
          display: flex;
          align-items: center;
          justify-content: center;
          `}>
           <Text fontSize = '0.8rem' color = 'white'>{totalItems}</Text>
          </div>
          </div>

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

          <div
            className="icon"
            css={css`
              width: 100%;
              @media (min-width: 1131px) {
                display: none;
              }
            `}
          >
            <form
              onSubmit={() => {}}
              css={css`
                width: 50%;
                position: relative;
                margin-right: auto;
                margin-left: auto;
                margin-top: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <input
                css={css`
                  border: 2px solid #e1e4e8;
                  padding: 0.6rem 1.3rem;
                  padding-right: 2rem;
                  box-sizing: border-box;
                  background: whitesmoke;
                  width: 100%;

                  outline: none;
                  border-radius: 5px;
                  &:focus {
                    border: 2px solid ${colors.theme};
                  }
                `}
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
              <div
               onClick = {searchItem}
                css={css`
                  position: absolute;
                  top: 0;
                  right: 16px;
                  color: gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                  &:hover {
                    color: ${colors.theme};
                  }
                `}
              >
                <Search size={18} />
              </div>
            </form>
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
                <TrendingUp />
                <span css={{ padding: "0.3rem" }}> Todays Deals</span>
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
                <Gift />
                <span css={{ padding: "0.3rem" }}>Offer Zone </span>
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
                <Layers />
                <span css={{ padding: "0.3rem" }}>Category </span>
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
                <ShoppingCart />
                <span css={{ padding: "0.3rem" }}>Cart </span>
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
