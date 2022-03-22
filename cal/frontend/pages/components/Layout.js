/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Navbar from './Navbar';
import {useEffect} from 'react'
// import Footer from './Footer';
// import { initGA, logPageView, Event } from "./googleAnalytics"

const Layout = ({children}) => {

    // useEffect (() => {
    //     if (!window.GA_INITIALIZED) {
    //         initGA()
    //         window.GA_INITIALIZED = true
    //       }
    //       logPageView()
    //     //   Event('hello', 'how', 'are')
    // },[])

    return (
     <div css = {css`
     background: a2a2a3;
     `}>
         <Navbar/>
         {children}
         {/* <Footer/> */}
     </div>
    )
}


export default Layout;