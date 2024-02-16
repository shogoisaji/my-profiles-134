import Rive from '@rive-app/react-canvas'
import { useWindowSize } from '@/app/customHooks/useWindowSize'
import { useEffect, useState } from 'react'

export const DetailButton = () => {
    const [width, height] = useWindowSize()
    const [isOverMd, setIsOverMd] = useState(false)
    useEffect(() => {
        setIsOverMd(width > 768)
    }, [width])

    const riveSource = isOverMd
        ? 'rive/detail.riv'
        : 'rive/detail_auto_hover.riv'
    return (
        <Rive
            key={riveSource}
            src={riveSource}
            stateMachines="state"
            onClick={() => console.log('clicked')}
            shouldDisableRiveListeners={isOverMd ? false : true}
        />
    )
}
