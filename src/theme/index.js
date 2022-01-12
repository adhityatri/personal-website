import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        bgLight: '#D8D8D8',
        primary: '#FE654F',
        border: '#FFFFEA'
    },
    fonts: {
        heading: 'Signika Negative'
    },
    space: '14px',
    spaceLayout: '20%'
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme