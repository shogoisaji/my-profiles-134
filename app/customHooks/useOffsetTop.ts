'use client'

import { useThrottle } from '@/app/customHooks/useThrottle'
import React, { useEffect, useState, useCallback } from 'react'

export function useOffsetTop(ref?: React.RefObject<HTMLElement>) {
    const [viewportTop, setViewportTop] = useState<number | undefined>(
        undefined
    )
    const [pageOffsetTop, setPageOffsetTop] = useState<number | undefined>(
        undefined
    )
    const scrollTop = (): number => {
        return Math.max(
            window.scrollY,
            document.documentElement.scrollTop,
            document.body.scrollTop
        )
    }

    const handler = useThrottle(() => {
        if (!ref?.current) return

        const clientRect = ref.current.getBoundingClientRect()
        setViewportTop(clientRect.top)
        const newPageOffsetTop = clientRect.top + scrollTop()
        setPageOffsetTop(newPageOffsetTop)
    }, 100) // 100msに一度実行

    useEffect(() => {
        if (!ref?.current) return

        // マウント時にも実行
        handler()
        window.addEventListener('scroll', handler)

        // アンマウント時にイベントリスナーを解除
        return () => window.removeEventListener('scroll', handler)
    }, [handler])

    return { viewportTop, pageOffsetTop }
}
