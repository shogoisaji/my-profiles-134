'use client'

import { motion } from 'framer-motion'

export const TopScreen = () => {
    return (
        <div className="flex shrink-0 h-screen justify-center items-center text-9xl font-black text-gray-600 bg-amber-200">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute"
            >
                <div
                    className="border border-gray-700 rounded-full"
                    style={{
                        borderRadius: '50%',
                        height: '30vw',
                        width: '70vw',
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
                    className="border border-gray-700 rounded-full"
                    style={{
                        borderRadius: '50%',
                        height: '30vw',
                        width: '70vw',
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
                    className="border border-gray-700 rounded-full"
                    style={{
                        borderRadius: '50%',
                        height: '30vw',
                        width: '70vw',
                    }}
                />
            </motion.div>
            <h1 className="text-center z-10">
                MY
                <br />
                PROFILES
            </h1>

            {/* <h1 className="text-center">
                MY
                <br />
                PROFILES
            </h1> */}
        </div>
    )
}
