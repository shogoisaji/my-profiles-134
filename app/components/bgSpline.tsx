'use client'

import Spline from '@splinetool/react-spline'

export const BgSpline = () => {
    return (
        //スマホではSplineがクラッシュするので暫定対策
        <div className="md:block hidden">
            <Spline
                className="fixed top-0 left-0"
                scene="https://prod.spline.design/lSSNw-vp-4c7z7wz/scene.splinecode"
            />
        </div>
    )
}
