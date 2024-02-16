import Rive from '@rive-app/react-canvas'
import { useWindowSize } from '@/app/customHooks/useWindowSize'

export const DetailButton = () => {
    const [width, height] = useWindowSize()
    const riveSource =
        width > 768 ? 'rive/detail.riv' : 'rive/detail_auto_hover.riv'
    console.log(riveSource)
    return <Rive key={riveSource} src={riveSource} stateMachines="state" />
}
