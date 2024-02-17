import React from 'react'
import { Tweet } from 'react-tweet'
import { components } from '@/app/components/tweetComponents'
import TweetListData from '@/data/tweetList.json'

interface Tweet {
    title: string
    uri: string
}

const tweetList: string[] = TweetListData

export const TweetList = () => {
    const postUrls = tweetList

    const postList: any[] = []
    postUrls.forEach((url: string) => {
        const paths = url.split('/')

        const id = paths[paths.length - 1].substring(0, 19)
        postList.push(
            <div key={id} className="px-1">
                <Tweet id={id} components={components} />
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center justify-center w-full text-custom-textWhite">
            <div className="md:w-[80%] w-[90%] bg-slate-500 backdrop-blur bg-opacity-50 md:rounded-3xl rounded-xl">
                <h1 className="flex flex-row justify-start z-20 w-full md:text-7xl text-4xl p-4 font-black">
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
