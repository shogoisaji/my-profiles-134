'use client'

import React, { useEffect, useRef } from 'react'
import { Tweet } from 'react-tweet'
import { components } from '@/app/components/tweetComponents'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import TweetListData from '@/data/tweetList.json'

interface Tweet {
    title: string
    uri: string
}

const tweetList: string[] = TweetListData

export const TweetList = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)
    const postUrls = tweetList

    const postList: any[] = []
    postUrls.forEach((url: string) => {
        const paths = url.split('/')

        const id = paths[paths.length - 1].substring(0, 19)
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
        <div
            ref={ref}
            className="flex flex-col items-center justify-center text-custom-textWhite"
        >
            <div className="md:w-[80%] w-[90%] bg-slate-500 bg-opacity-70 md:rounded-3xl rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-6xl text-4xl p-4 font-bold">
                    X posts
                </h1>
                <div
                    className="h-auto w-full overflow-x-auto"
                    style={{ display: 'flex' }}
                >
                    {postList}
                </div>
            </div>
        </div>
    )
}
