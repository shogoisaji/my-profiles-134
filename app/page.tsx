'use client'

import { About } from '@/app/components/about'
import { Career } from '@/app/components/career'
import { Footer } from '@/app/components/footer'
import { Portfolio } from '@/app/components/portfolio'
import { Skills } from '@/app/components/skills'
import { SplineComponent } from '@/app/components/spline'
import { TopScreen } from '@/app/components/top-screen'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Page() {
    const [isChange, setIsChange] = useState(false)
    const [currentScreenName, setCurrentScreenName] = useState('top')
    const [bgColor, setBgColor] = useState('bg-custom-yellow')
    const [prevBgColor, setPrevBgColor] = useState('bg-custom-yellow')

    const { screenPositions } = useScreenPositionsStore()

    const [windowHeight, setWindowHeight] = useState(0)

    const offset: number = windowHeight / 2

    const setCurrentPositionHandler = () => {
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
            window.scrollY + offset < screenPositions.footer
        ) {
            setCurrentScreenName('portfolio')
            setBgColor('bg-custom-darkGreen')
        } else if (window.scrollY + offset > screenPositions.footer) {
            setCurrentScreenName('footer')
            setBgColor('bg-custom-blown')
        }
    }

    useEffect(() => {
        setWindowHeight(window.innerHeight)
        setIsChange(true)
        setTimeout(() => setIsChange(false), 500)
        console.log('bgColor')
        // setPrevBgColor(bgColor)
        setTimeout(() => setPrevBgColor(bgColor), 500)
        console.log(bgColor)
        console.log(prevBgColor)
    }, [bgColor])

    // useEffect(() => {
    //     setWindowHeight(window.innerHeight)
    //     setIsChange(true)
    //     setTimeout(() => setIsChange(false), 500)
    // }, [currentScreenName])

    useEffect(() => {
        window.addEventListener('scroll', setCurrentPositionHandler)
        return () => {
            window.removeEventListener('scroll', setCurrentPositionHandler)
        }
    }, [setCurrentPositionHandler])
    return (
        <main className={`flex min-h-screen flex-col px-4`}>
            <div
                className={`fixed top-0 left-0 w-screen h-screen -z-50 ${prevBgColor}`}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={isChange ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    opacity: { duration: 0.5 },
                }}
                className={`${bgColor}  fixed top-0 left-0 w-screen min-h-screen -z-10`}
            ></motion.div>

            <TopScreen />
            <About />
            <Career />
            <Portfolio />
            <Footer />
            <SplineComponent />
            <div className="fixed text-3xl font-bold text-red-400 z-50">
                {currentScreenName}
                <br />
                {bgColor}
                <br />
                {prevBgColor}
            </div>
        </main>
    )
}
