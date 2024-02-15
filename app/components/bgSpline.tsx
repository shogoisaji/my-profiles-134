'use client'

import Spline from '@splinetool/react-spline'
import Image from 'next/image'

export const BgSpline = () => {
    return (
        //スマホではSplineがクラッシュするので暫定対策
        <div>
            <div className="lg:block hidden">
                <Spline
                    className="fixed top-0 left-0"
                    scene="https://prod.spline.design/lSSNw-vp-4c7z7wz/scene.splinecode"
                />
            </div>
            <div className="lg:hidden block fixed top-0 left-0">
                <Image
                    src="/images/alt_bg.png"
                    width={1920}
                    height={1080}
                    alt="background"
                />
            </div>
        </div>
    )
}
