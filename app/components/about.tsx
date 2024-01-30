import { Skills } from '@/app/components/skills'
import { Sns } from '@/app/components/sns'
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
            className="flex flex-col items-center justify-center md:py-40 py-12 relative"
        >
            <h1 className="flex flex-row justify-start z-20 w-full md:text-6xl text-5xl md:ml-24 md:mb-12 mb-4 font-bold text-custom-yellow">
                About
            </h1>
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
                    <Sns />
                </div>
                <div className="flex flex-col justify-center items-center w-[50%] ">
                    <div className="flex flex-col items-center justify-center mb-6">
                        <p className="md:text-xl text-lg mt-4">
                            情報工学系の大学を卒業後、IT系を目指すも叶わず町工場へ就職。マシンオペレータとして働くが、ものづくりの上流の職に興味を持ち、設計職へ転職。企画、開発、設計、生産管理を経験し、お客様に対し如何に価値を提供し、満足して頂くことが大切かを学ぶ。現在は、自分にしか生み出せない価値を生産するため自己を磨いています。ありがとうを求めて！
                        </p>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    )
}
