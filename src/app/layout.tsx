import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './reset.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Token Tracker',
    description: 'For Ryanair',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
