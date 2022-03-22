/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css} from '@emotion/react'

const ModalCard = ({...props}) => {
    return (
        <div
        className = 'login_container_modal'
        css = {css`
        position: relative;
        box-sizing: border-box;
        top: 50%;
        left: 50%;
        width: 400px;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem 1rem;
        @media(max-width: 500px) {
          width: 340px;
          padding: 1rem;
        }
        @media(max-width: 350px) {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translate(0, 0);
          padding: 0rem;
          width: 100%;
          margin: auto;
          border-radius: 0;
          justify-content: start;
        }
        `}
        {...props}
        />
    )
}

export default ModalCard;