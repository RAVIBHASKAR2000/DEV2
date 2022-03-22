/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'


const MartyrContainer = ({...props}) => {
    return (
        <div
        css={css`        
        margin-bottom: 3rem;
      `}
        {...props}
        />
    )
}

export default MartyrContainer
