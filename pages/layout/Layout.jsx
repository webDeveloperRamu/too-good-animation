import Head from 'next/head'
import React from 'react'

export const Layout = ({children}) => {
    return (
        <>
            <Head><title>header {new Date().getFullYear()}</title></Head>
            <main>{children}</main>
        </>
    )
}
