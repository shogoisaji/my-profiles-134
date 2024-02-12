'use client'

// import { promises as fs } from 'fs'
import React, { useEffect, useRef } from 'react'
import { Tweet } from 'react-tweet'
import { components } from '@/app/components/tweetComponents'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { useOffsetTop } from '@/app/customHooks/useOffsetTop'

interface Tweet {
    title: string
    uri: string
}

const tweetList: string[] = [
    'https://x.com/_isaji134/status/1756619920442523986?s=20',
    'https://x.com/_isaji134/status/1756221283665404216?s=20',
    'https://x.com/_isaji134/status/1755228084067029012?s=20',
    'https://x.com/_isaji134/status/1753474619112395160?s=20',
]

export const TweetList = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)
    const postUrls = tweetList

    const postList: any[] = []
    postUrls.forEach((url: string) => {
        // const id = url.split("/")[].substring(34, 53)
        const paths = url.split('/')

        const id = paths[paths.length - 1].substring(0, 19)
        console.log('tweet id', id)
        postList.push(
            <div className="px-1">
                <Tweet id={id} components={components} />
            </div>
        )
    })

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ tweet: pageOffsetTop })
    }, [pageOffsetTop])

    return (
        <div ref={ref} className="md:py-32 py-12">
            <h1 className="flex flex-row justify-start z-20 w-full md:text-6xl text-5xl md:ml-24  font-bold text-custom-darkGreen">
                X posts
            </h1>
            <div
                className="h-auto w-full overflow-x-auto"
                style={{ display: 'flex' }}
            >
                {postList}
            </div>
        </div>
    )
}
