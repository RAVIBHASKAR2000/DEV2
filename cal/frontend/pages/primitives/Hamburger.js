/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const Hamburger = ({...props}) => {
   return(
   <div 
     css = {css`
       position: absolute;
       top: 0;
       right: 20px;
       z-index: 5;
       height: 60px;
       position: fixed;
       width: 30px;
       margin-left: auto;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       cursor: pointer;
       @media(min-width: 1131px) {
           display: none;
       }
     `}
   {...props}/>
   )
}

export default Hamburger;