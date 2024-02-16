'use client'

import { motion } from 'framer-motion'

export const TopScreen = () => {
    return (
        <div className="flex shrink-0 h-screen justify-center items-center text-gray-600">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    opacity: { duration: 3 },
                }}
                className="flex items-center justify-center "
            >
                {/* <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        rotate: {
                            duration: 7,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-gray-600 rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '75vw',
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ rotate: 45 }}
                    animate={{ rotate: 405 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: 0.3,
                        ease: 'easeInOut',
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-gray-600 rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '75vw',
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 450 }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: 0.5,
                        ease: 'easeInOut',
                    }}
                    className="absolute"
                >
                    <div
                        className="border border-gray-600 rounded-full"
                        style={{
                            borderRadius: '50%',
                            height: '25vw',
                            width: '75vw',
                        }}
                    />
                </motion.div> */}
                <h1
                    className="text-center text-gray-600 z-10 font-black"
                    style={{
                        fontSize: '12vw',
                        lineHeight: '0.9',
                    }}
                >
                    {`SHOGO\'s`}
                    <br />
                    PORTFOLIO
                </h1>
            </motion.div>
        </div>
    )
}
