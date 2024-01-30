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
            className="flex flex-col items-center justify-center py-12"
        >
            afdadf
        </div>
    )
}
