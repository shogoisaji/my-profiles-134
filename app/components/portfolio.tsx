'use client'

import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import ContentData from '@/data/portfolioContentData.json'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export const Portfolio = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)
    const [componentHeight, setComponentHeight] = useState(0)

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                setComponentHeight(ref.current.clientHeight)
            }
        }
        window.addEventListener('resize', updateHeight)
        // 初期値を設定
        updateHeight()
        // クリーンアップ関数
        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ portfolio: pageOffsetTop })
    }, [pageOffsetTop])

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center py-40"
        >
            <h1 className="flex flex-row justify-start z-20 w-full md:text-6xl text-5xl md:ml-24  font-bold text-custom-darkBlue">
                Portfolio
            </h1>
            {ContentData.map((data: PortfolioContent) => (
                <div
                    key={data.title}
                    className="my-4 w-full flex justify-center items-center"
                >
                    <PortfolioContent content={data} />
                </div>
            ))}
        </div>
    )
}

export const PortfolioContent = ({
    content,
}: {
    content: PortfolioContent
}) => {
    return (
        <div className="flex flex-col items-center md:py-8 py-4 w-[100%] max-w-[800px] relative">
            <div
                className="absolute top-32 border-2 border-gray-300 opacity-40 rounded-full md:block hidden"
                style={{
                    rotate: '35deg',
                    borderRadius: '50%',
                    height: '35vw',
                    width: '85vw',
                }}
            />
            <div className="flex md:flex-row flex-col md:items-end items-start justify-between z-10 md:px-4 px-1 w-full">
                <div className="flex flex-col w-full md:pb-4 pb-2 md:pr-4 pr-0">
                    <h1 className="text-xl text-custom-yellow">
                        {content.subtitle}
                    </h1>
                    <h1 className="md:text-5xl text-3xl font-bold text-custom-yellow">
                        {content.title}
                    </h1>
                    <p className="md:text-xl text-lg md:mt-3 mt-2">
                        {content.description}
                    </p>
                </div>
                <div className="flex flex-col">
                    <div
                        className={`grid ${
                            content.tools.length == 1
                                ? 'md:grid-rows-1'
                                : 'md:grid-rows-2'
                        } grid-flow-col gap-2 md:pb-4 pb-2`}
                    >
                        {content.tools.map((tool: string) => (
                            <Image
                                key={tool}
                                src={`/toolImages/${tool}.png`}
                                className="md:rounded-xl rounded-lg md:w-[70px] w-[40px]"
                                alt="tool"
                                width={70}
                                height={70}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {content.image && (
                <Image
                    src={`/images/${content.image}`}
                    className="md:rounded-2xl rounded-lg z-10"
                    alt="account"
                    width={800}
                    height={600}
                />
            )}
            <div className="flex w-full flex-row justify-end md:p-4 p-2 z-10">
                {content.storeLink && (
                    <Link href={content.storeLink}>
                        <Image
                            src="/images/app_store.svg"
                            className="md:mr-8 mr-3 md:w-[133px] w-[92px]"
                            alt="store"
                            width={92}
                            height={35}
                        />
                    </Link>
                )}
                <Link href={content.detailLink}>
                    <div className="flex md:w-32 md:h-12 w-24 h-8 md:rounded-lg rounded-md items-center justify-center md:text-2xl text-xl font-semibold border-[0.5px] hover:border-black hover:text-gray-700 hover:bg-amber-200 bg-custom-green text-white border-white">
                        Detail
                    </div>
                </Link>
            </div>
        </div>
    )
}
