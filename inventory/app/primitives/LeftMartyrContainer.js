/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const LeftMartyrContainer = ({...props}) => {
    return (
        <div  
        css={css`
                display: flex;
                justify-content: space-between; 
                align-items: center;
            `}
         {...props}
        />
            
    )
}

export default LeftMartyrContainer
