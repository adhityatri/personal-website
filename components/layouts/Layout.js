import Head from 'next/head'
import Theme from '../../styles/theme'
import { LayoutDefault } from "./Layout.style"
import GlobalStyle from '../../styles/global.style'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <Theme>
            <GlobalStyle />
            <Navbar />
            <LayoutDefault>
                <Head>
                    <title>Layout Example Loaded</title>
                </Head>
                <main>{children}</main>
            </LayoutDefault>
        </Theme>
    )
}