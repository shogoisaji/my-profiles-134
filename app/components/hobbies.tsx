import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { useEffect, useRef } from 'react'

export const Hobbies = () => {
    const ref = useRef(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ hobbies: pageOffsetTop })
    }, [pageOffsetTop])
    return (
        <div
            ref={ref}
            className="flex flex-row items-center justify-center py-40 h-60"
        >
            <div className="flex flex-row justify-center">
                <div className="flex flex-col h-full md:mr-16 mr-8 items-center justify-start">
                    <h1 className="md:text-3xl text-2xl font-semibold text-gray-200">
                        取得資格
                    </h1>
                </div>
                <div className="flex flex-col h-full md:mr-12 items-start justify-start">
                    <h1 className="md:text-3xl text-2xl font-semibold text-gray-200">
                        学習中
                    </h1>
                    <div className="ml-5 mt-3">
                        <ul className="list-disc md:text-2xl text-lg">
                            <li>Flutter</li>
                            <li>React Native</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
