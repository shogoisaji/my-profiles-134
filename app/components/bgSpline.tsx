'use client'

import Spline from '@splinetool/react-spline'
import Image from 'next/image'

export const BgSpline = () => {
    return (
        //スマホではSplineがクラッシュするので暫定対策
        <div>
            <div className="">
                <Spline
                    className="fixed top-0 left-0 w-full h-full"
                    scene="https://prod.spline.design/lSSNw-vp-4c7z7wz/scene.splinecode"
                />
            </div>
            {/* <div className="lg:hidden block fixed top-0 left-0">
                <Image
                    src="/images/alt_bg.png"
                    width={664}
                    height={1440}
                    alt="background"
                />
            </div> */}
        </div>
    )
}
