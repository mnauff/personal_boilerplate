/* eslint-disable react/prop-types */
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        default: 'Beranda - Institut Teknologi Sepuluh Nopember (ITS)',
        template: '%s - Institut Teknologi Sepuluh Nopember (ITS)',
    },
    description: 'Create ITS clone for practice purposes',
    icons: {
        icon: [
            {
                url: '/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: '/favicon/favicon.ico',
                sizes: 'any',
            },
        ],
        apple: {
            url: '/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
    },
}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
