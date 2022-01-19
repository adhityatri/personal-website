import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        bgLight: '#D8D8D8',
        primary: '#FE654F',
        border: '#FFFFEA',
        text: '#19323C'
    },
    fonts: {
        heading: 'Signika Negative',
        indent: "30px"
    },
    space: '14px',
    layout: {
        space: '20%',
        spaceLarge: '30%',
    },
    breakpoints: {
        xs: "(min-width: 0)",
        sm: "(min-width : 576px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 992px)",
        xl: "(min-width: 1200px)",
        xxl: "(min-width: 1400px)"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme