import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export const About = () => {
    const ref = useRef(null)
    const { viewportTop = 0, pageOffsetTop = 0 } = useOffsetTop(ref)

    useEffect(() => {
        useScreenPositionsStore
            .getState()
            .setScreenPositions({ about: pageOffsetTop })
    }, [pageOffsetTop])

    return (
        <div
            ref={ref}
            className="flex items-center justify-center py-8 relative"
        >
            <div className="absolute left-0 -rotate-90 md:block hidden">
                <h1 className="text-5xl font-bold">ABOUT</h1>
            </div>
            <div className="flex flex-row justify-center items-center ml-6">
                <div className="flex flex-col justify-center items-center mr-10">
                    <Image
                        src="/images/account-image.png"
                        className="w-32"
                        alt="account"
                        width={128}
                        height={128}
                    />
                    <h1 className="text-xl font-semibold my-4 text-gray-700">
                        Shogo Isaji
                    </h1>
                    {/* link icons */}
                    <div className="flex flex-row w-32 justify-between">
                        <Link href="https://github.com/shogoisaji">
                            <Image
                                src="/images/github.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="github"
                                width={32}
                                height={32}
                            />
                        </Link>
                        <Link href="https://zenn.dev/s134">
                            <Image
                                src="/images/zenn.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="zenn"
                                width={32}
                                height={32}
                            />
                        </Link>
                        <Link href="https://twitter.com/_isaji134">
                            <Image
                                src="/images/x.png"
                                className="w-8 h-8 hover:rotate-6 hover:scale-105"
                                alt="x"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[50%] ">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <p className="text-xl mt-4">
                            情報工学系の大学を卒業後、IT系を目指すも叶わず町工場へ就職。マシンオペレータとして働くが、ものづくりの上流の職に興味を持ち、設計職へ転職。企画、開発、設計、生産管理を経験し、お客様に対し如何に価値を提供し、満足して頂くことが大切かを学ぶ。現在は、自分にしか生み出せない価値を生産するため自己を磨いている。最近は夢中でコード書いてます！
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
