import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'my_profiles_shogoisaji',
    description: 'my_profiles_shogoisaji',
    keywords: 'shogoisaji,134,shogo isaji',
    openGraph: {
        type: 'website',
        url: '/', //deployURL,
        title: 'my_profiles_shogoisaji',
        description: 'my_profiles_shogoisaji',
        images: [
            {
                url: '/', //imageURL,
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
