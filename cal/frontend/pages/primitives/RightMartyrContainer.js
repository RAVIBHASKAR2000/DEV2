/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const RightMartyrContainer = ({...props}) => {
    return (
        <div  
        css={css`
              margin: '1rem 0 0 0.5rem';
            `}
         {...props}
        />
            
    )
}

export default RightMartyrContainer
