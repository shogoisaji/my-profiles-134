import { Sns } from '@/app/components/sns'
import { useOffsetTop } from '@/app/customHooks/useOffsetTop'
import { useScreenPositionsStore } from '@/app/store/screenPositionsStore'
import { motion } from 'framer-motion'
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
            className="flex flex-col items-center justify-center h-[150vh] relative"
        >
            <div className="flex flex-row justify-center w-full -z-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        rotate: {
                            duration: 11,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-white rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '90vw',
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 405 }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: 0.3,
                        ease: 'easeInOut',
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-white rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '90vw',
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 450 }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        delay: 0.5,
                        ease: 'easeInOut',
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-white rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '90vw',
                        }}
                    />
                </motion.div>
            </div>
            <h1 className=" font-bold md:text-4xl text-3xl md:mt-12">
                Thanks for Reading!
            </h1>
            <div className="md:pt-12 pt-6">
                <Sns iconSize={42} />
            </div>
            <p className="absolute bottom-4 text-gray-300">
                © 2024 Shogo Isaji
            </p>
        </div>
    )
}
