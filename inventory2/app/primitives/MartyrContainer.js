/** @jsx jsx */
import { jsx, css } from '@emotion/core'


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
