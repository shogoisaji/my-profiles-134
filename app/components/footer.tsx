import { Sns } from '@/app/components/sns'
import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { useEffect, useRef } from 'react'

export const Footer = () => {
    const ref = useRef(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ footer: pageOffsetTop })
    }, [pageOffsetTop])
    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center h-screen relative"
        >
            <h1 className=" font-bold md:text-4xl text-3xl">
                {' '}
                Thanks for Reading!
            </h1>
            <div className="py-24">
                <Sns />
            </div>
            <p className="absolute bottom-4 text-gray-300">
                © 2024 Shogo Isaji
            </p>
        </div>
    )
}
