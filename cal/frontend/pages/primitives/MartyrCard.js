/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const MartyrCard =  ({color = 'white', width = '100%', ...props}) => {
    return (
        <div  
        css={css` 
          margin-bottom: 1rem;
          background: ${color};
          border-radius: 8px;
          box-shadow: 0px 0px 22px -11px rgba(0, 0, 0, 0.5);
          @media (max-width: 500px) {
            margin-bottom: 1rem;
            width: 100%;
          }
        `}
        {...props}
        />
    )
}

export default MartyrCard;