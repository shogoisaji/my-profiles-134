import { About } from '@/app/components/about'
import { Career } from '@/app/components/career'
import { Portfolio } from '@/app/components/portfolio'
import { Skills } from '@/app/components/skills'
import { SplineComponent } from '@/app/components/spline'
import { StrengthsFinder } from '@/app/components/strengthsFinder'
import { TopScreen } from '@/app/components/top-screen'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-700">
            <div>
                <TopScreen />
                <About />
                <Career />
                <Portfolio />
                <Skills />
                <StrengthsFinder />
                <SplineComponent />
            </div>
        </main>
    )
}
