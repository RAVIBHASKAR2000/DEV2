/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Hamburger = ({...props}) => {
   return(
   <div 
     css = {css`
       position: absolute;
       top: 0;
       right: 5rem;
       z-index: 5;
       height: 60px;
       position: fixed;
       width: 30px;
       margin-left: auto;
       display: flex;
       align-items: center;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       cursor: pointer;
       @media(min-width: 700px) {
           display: none;
       }
     `}
   {...props}/>
   )
}

export default Hamburger;