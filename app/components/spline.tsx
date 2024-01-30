'use client'

import Spline from '@splinetool/react-spline'

export const SplineComponent = () => {
    return (
        <div className="w-20 h-20 bg-white">
            <Spline
                className="w-10 h-10 bg-red-300"
                style={{ width: '10%', height: '10%' }}
                scene="https://prod.spline.design/pLGYrfuvxCUnZo8a/scene.splinecode"
            />
        </div>
    )
}
