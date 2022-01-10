import { ThemeProvider } from "styled-components"
const theme = {
    colors: {
        bgLight: '#FEFEFF',
        primary: '#FE654F'
    },
    space: '14px'
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme