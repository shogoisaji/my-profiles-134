import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "shogo's portfolio",
    description: "This page is shogo's portfolio.",
    keywords: 'shogoisaji, 134, shogo, isaji, portfolio',
    openGraph: {
        type: 'website',
        url: 'https://isaji134.com', //deployURL,
        title: "shogo's portfolio",
        description: "shogo's portfolio",
        images: [
            {
                url: 'https://isaji134.com/images/portfolio_image.pnp', //imageURL,
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="jp">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
