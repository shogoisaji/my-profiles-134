'use client'

import { About } from '@/app/components/about'
import { Career } from '@/app/components/career'
import { Portfolio } from '@/app/components/portfolio'
import { Skills } from '@/app/components/skills'
import { SplineComponent } from '@/app/components/spline'
import { StrengthsFinder } from '@/app/components/strengthsFinder'
import { TopScreen } from '@/app/components/top-screen'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Page() {
    const [isChange, setIsChange] = useState(false)
    const [currentScreenName, setCurrentScreenName] = useState('top')
    const [bgColor, setBgColor] = useState('bg-custom-yellow')

    const { screenPositions } = useScreenPositionsStore()

    const [windowHeight, setWindowHeight] = useState(0)

    const offset: number = windowHeight / 2

    const setCurrentPositionHandler = () => {
        console.log(offset)
        if (window.scrollY + offset < screenPositions.about) {
            setCurrentScreenName('top')
            setBgColor('bg-custom-yellow')
            console.log('top')
        } else if (
            window.scrollY + offset > screenPositions.about &&
            window.scrollY + offset < screenPositions.career
        ) {
            setCurrentScreenName('about')
            setBgColor('bg-custom-green')
            console.log('about')
        } else if (
            window.scrollY + offset > screenPositions.career &&
            window.scrollY + offset < screenPositions.portfolio
        ) {
            setCurrentScreenName('career')
            setBgColor('bg-blue-700')
            console.log('career')
        } else if (
            window.scrollY + offset > screenPositions.portfolio &&
            window.scrollY + offset < screenPositions.skills
        ) {
            setCurrentScreenName('portfolio')
            setBgColor('bg-gray-700')
            console.log('portfolio')
        } else if (
            window.scrollY + offset > screenPositions.skills &&
            window.scrollY + offset < screenPositions.hobbies
        ) {
            setCurrentScreenName('skills')
            setBgColor('bg-gray-800')
            console.log('skills')
        }
    }
    useEffect(() => {
        setWindowHeight(window.innerHeight)
        setIsChange(true)
        setTimeout(() => setIsChange(false), 700)
    }, [currentScreenName])

    useEffect(() => {
        window.addEventListener('scroll', setCurrentPositionHandler)
        return () => {
            window.removeEventListener('scroll', setCurrentPositionHandler)
        }
    }, [window.scrollY])
    return (
        <main className="flex min-h-screen flex-col ">
            <div className="fixed top-0 left-0 w-screen h-screen bg-gray-600 -z-100" />
            <motion.div
                initial={{ opacity: 1 }}
                animate={
                    isChange ? { opacity: [0.8, 0.7, 0.9] } : { opacity: 1 }
                }
                transition={{
                    opacity: { duration: 0.7 },
                }}
                className={`${bgColor}  fixed top-0 left-0 w-screen h-screen`}
            ></motion.div>
            <div>
                <div className="fixed text-xl text-red-400">
                    {currentScreenName}
                </div>
                <TopScreen />
                <About />
                <Career />
                <Portfolio />
                <Skills />
                <StrengthsFinder />
                <SplineComponent />
            </div>
        </main>
    )
}
