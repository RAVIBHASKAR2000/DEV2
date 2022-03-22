/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export default ({color = 'black', fontSize, transitionTime = '0.5', margin = '0', hoverColor = 'none', padding = '0', ...props}) => {
    return (
    <li
    css = {css`
     color: ${color};
     font-size: ${fontSize};
     margin: ${margin};
     transition: all ${transitionTime}s ease;
     cursor: pointer;
     list-style: none;
     padding: ${padding};
     &:hover {
       color: ${hoverColor}
     };

    `}
     {...props}
  />
    )
}
