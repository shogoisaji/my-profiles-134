import { About } from '@/app/components/about'
import { Portfolio } from '@/app/components/portfolio'
import { SplineComponent } from '@/app/components/spline'
import { TopScreen } from '@/app/components/top-screen'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-700">
            <div>
                <TopScreen />
                <About />
                <Portfolio />
                <SplineComponent />
            </div>
        </main>
    )
}
