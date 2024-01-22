import { TopScreen } from '@/app/components/top-screen'

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-700">
            <div>
                <TopScreen />
                <TopScreen />
            </div>
        </main>
    )
}
