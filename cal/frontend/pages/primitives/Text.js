/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx} from '@emotion/react'

const Text = ({
    fontSize = '1rem',
    fontStyle = 'italic', 
    margin = '0', 
    fontWeight = '500', 
    cursor = 'default', 
    ...props}) => {
    return (
        <p
        css = {{
            fontSize: fontSize,
            margin: margin,
            cursor: cursor,
            fontWeight: fontWeight,
            fontStyle
        }}
        {...props}
        />
    )
}

export default Text;