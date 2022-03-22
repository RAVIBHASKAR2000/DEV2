/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx} from '@emotion/react'

const Heading = ({fontSize = '1rem', margin = '0', cursor = 'default', fontWeight = 500, padding = '0', color = 'black', ...props}) => {
    return (
        <h1
        css = {{
            fontSize: fontSize,
            margin: margin,
            cursor: cursor,
            fontWeight: fontWeight,
            padding: '0',
            color: color
        }}
        {...props}
        />
    )
}

export default Heading;