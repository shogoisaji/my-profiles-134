'use client'

import { About } from '@/app/components/about'
import { Career } from '@/app/components/career'
import { Portfolio } from '@/app/components/portfolio'
import { Skills } from '@/app/components/skills'
import { SplineComponent } from '@/app/components/spline'
import { StrengthsFinder } from '@/app/components/strengthsFinder'
import { TopScreen } from '@/app/components/top-screen'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { useEffect, useState } from 'react'

export default function Page() {
    const [currentPosition, setCurrentPosition] = useState(0)
    const [currentScreenName, setCurrentScreenName] = useState('top')
    const [bgColor, setBgColor] = useState('bg-gray-700')

    const { screenPositions } = useScreenPositionsStore()

    const offset: number = window.innerHeight / 2

    const setCurrentPositionHandler = () => {
        setCurrentPosition(window.scrollY)
        if (window.scrollY + offset < screenPositions.about) {
            setCurrentScreenName('top')
            setBgColor('bg-gray-400')
            console.log('top')
        } else if (
            window.scrollY + offset > screenPositions.about &&
            window.scrollY + offset < screenPositions.career
        ) {
            setCurrentScreenName('about')
            setBgColor('bg-gray-500')
            console.log('about')
        } else if (
            window.scrollY + offset > screenPositions.career &&
            window.scrollY + offset < screenPositions.portfolio
        ) {
            setCurrentScreenName('career')
            setBgColor('bg-gray-600')
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
        //  else if (window.scrollY > screenPositions.hobbies) {
        //     console.log('hobbies')
        // }
    }

    useEffect(() => {
        window.addEventListener('scroll', setCurrentPositionHandler)
        return () => {
            window.removeEventListener('scroll', setCurrentPositionHandler)
        }
    }, [window.scrollY])
    return (
        <main className={`flex min-h-screen flex-col ${bgColor}`}>
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
