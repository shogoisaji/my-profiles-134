'use client'

import { About } from '@/app/components/about'
import { Career } from '@/app/components/career'
import { Footer } from '@/app/components/footer'
import { Portfolio } from '@/app/components/portfolio'
import { TopScreen } from '@/app/components/top-screen'
import { TweetList } from '@/app/components/tweetList'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Page() {
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const [isChange, setIsChange] = useState(false)
    const [currentScreenName, setCurrentScreenName] = useState('top')
    const [bgColor, setBgColor] = useState('bg-custom-yellow')
    const [prevBgColor, setPrevBgColor] = useState('bg-custom-yellow')

    const { screenPositions } = useScreenPositionsStore()

    const [windowHeight, setWindowHeight] = useState(0)

    const offset: number = windowHeight / 2

    const setCurrentPositionHandler = () => {
        setScrollPosition(window.scrollY)
        if (window.scrollY + offset < screenPositions.about) {
            setCurrentScreenName('top')
            setBgColor('bg-custom-yellow')
        } else if (
            window.scrollY + offset > screenPositions.about &&
            window.scrollY + offset < screenPositions.career
        ) {
            setCurrentScreenName('about')
            setBgColor('bg-custom-green')
        } else if (
            window.scrollY + offset > screenPositions.career &&
            window.scrollY + offset < screenPositions.portfolio
        ) {
            setCurrentScreenName('career')
            setBgColor('bg-custom-darkBlue')
        } else if (
            window.scrollY + offset > screenPositions.portfolio &&
            window.scrollY + offset < screenPositions.tweet
        ) {
            setCurrentScreenName('portfolio')
            setBgColor('bg-custom-darkGreen')
        } else if (
            window.scrollY + offset > screenPositions.tweet &&
            window.scrollY + offset < screenPositions.footer
        ) {
            setCurrentScreenName('tweet')
            setBgColor('bg-custom-black')
        } else if (window.scrollY + offset > screenPositions.footer) {
            setCurrentScreenName('footer')
            setBgColor('bg-custom-blown')
        }
    }

    useEffect(() => {
        setWindowHeight(window.innerHeight)
        setIsChange(true)
        setTimeout(() => setIsChange(false), 500)
        setTimeout(() => setPrevBgColor(bgColor), 500)
    }, [bgColor])

    useEffect(() => {
        window.addEventListener('scroll', setCurrentPositionHandler)
        return () => {
            window.removeEventListener('scroll', setCurrentPositionHandler)
        }
    }, [setCurrentPositionHandler])
    return (
        <main className="flex flex-col px-4">
            <div
                className={`fixed top-0 left-0 w-full h-[110%] -z-50 ${prevBgColor}`}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={isChange ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    opacity: { duration: 0.5 },
                }}
                className={`${bgColor}  fixed top-0 left-0 w-full h-[110%] -z-10`}
            ></motion.div>
            <TopScreen />
            <About />
            <Career />
            <Portfolio />
            <TweetList />
            <Footer />
        </main>
    )
}
