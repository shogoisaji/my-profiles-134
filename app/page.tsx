'use client'

import { About } from '@/app/components/about'
import { BgSpline } from '@/app/components/bgSpline'
import { Career } from '@/app/components/career'
import { Footer } from '@/app/components/footer'
import { History } from '@/app/components/history'
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

    const spacer = () => <div className="md:h-20 h-10" />

    return (
        <main className="flex flex-col items-center md:px-4 px-2 max-w-8xl mx-auto">
            <TopScreen />
            <About />
            {spacer()}
            <History />
            {spacer()}
            <Portfolio />
            {spacer()}
            <TweetList />
            <Footer />
            <div className="h-full w-full -z-10">
                <BgSpline />
            </div>
            <div className="fixed top-0 left-0 w-full h-full -z-20 bg-custom-dark" />
        </main>
    )
}
