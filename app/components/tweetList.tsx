'use client'

// import { promises as fs } from 'fs'
import React, { useEffect, useRef } from 'react'
import { Tweet } from 'react-tweet'

interface Tweet {
    title: string
    uri: string
}

const tweetList: string[] = [
    'https://x.com/_isaji134/status/1756221283665404216?s=20',
    'https://x.com/_isaji134/status/1755228084067029012?s=20',
]

export const TweetList = () => {
    const listRef = useRef<HTMLDivElement>(null)
    // const file = await fs.readFile(
    //     process.cwd() + '/app/data/tweetList.json',
    //     'utf8'
    // )
    const postUrls = tweetList

    const postList: any[] = []
    postUrls.forEach((url: string) => {
        // const id = url.split("/")[].substring(34, 53)
        const paths = url.split('/')

        const id = paths[paths.length - 1].substring(0, 19)
        console.log('tweet id', id)
        postList.push(<Tweet id={id} />)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (listRef.current) {
                const { scrollLeft, clientWidth, scrollWidth } = listRef.current
                const isEnd = scrollLeft + clientWidth >= scrollWidth
                listRef.current.scrollLeft = isEnd ? 0 : scrollLeft + 1
            }
        }, 50) // 50ミリ秒ごとに1ピクセルスクロール

        return () => clearInterval(interval) // コンポーネントのアンマウント時にインターバルをクリア
    }, [])

    return (
        <div ref={listRef} style={{ display: 'flex', overflowX: 'auto' }}>
            {postList}
        </div>
    )
}
