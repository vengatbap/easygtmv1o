import { Inter } from "next/font/google";
import '@/app/css/globals.css'
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
const interFont = Inter({
    subsets: ['latin'],
    display: 'swap',
})
const RootLayout = ({ children }) => {
    return (
        <>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <ThemeModeScript />
          </head>
          <body className={`${interFont.className}`}>
            <Flowbite theme={{ theme: customTheme }}>
                    {children}
            </Flowbite>
          </body>
        </html>
        </>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout

