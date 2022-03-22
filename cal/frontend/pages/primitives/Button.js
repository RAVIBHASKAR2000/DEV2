/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import {colors} from '../../theme';

const Button =  ({
    background = colors.theme, 
    border = 'none', 
    color = 'black', 
    outline = 'none', 
    hoverColor = 'none',
    fontSize,
    margin = 0,
    padding = 0, 
    borderRadius = '0',
    opacity = 0.8,
    ...props}) => {
    return (
    <button
    css={{
        background: background,
        margin: margin,
        border: 'none',
        color: color,
        outline: 'none',
        fontSize: fontSize,
        padding: padding,
        display: 'inline-block',
        borderRadius: borderRadius,
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        opacity: opacity,
        '&:hover': {
            color: hoverColor,
            opacity: 1
        }
    }}
     {...props}
  />
    )
}

export default Button;