/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css} from '@emotion/react'

const ModalContainer = ({
    background = 'rgba(0,0,0,0.3)', 
    zIndex = '11', 
    ...props}) => {
    return (
        <div
        className = 'login_container'
        css = {css`
        background: ${background};
        height: 100vh;
        width: 100%;
        position: fixed;
        z-index: ${zIndex};
        `}
        {...props}
        />
    )
}

export default ModalContainer;