/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import {colors} from '../theme'

const FooterWrap =  ({...props}) => {
    return (
        <div  
        css={css`
            height: 45px; 
            background: rgba(255, 102, 0, 0.9);
            color: white; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            flex-direction: column; 
            text-align: center;
            p {
                margin: 0;
                font-size: 0.9rem;
            }
            `}
        {...props}
        />
    )
}

export default FooterWrap;