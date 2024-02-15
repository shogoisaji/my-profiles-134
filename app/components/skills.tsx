import { StrengthsFinder } from '@/app/components/strengthsFinder'
import Image from 'next/image'

export const Skills = () => {
    const tools = [
        'flutter',
        'react',
        'typescript',
        'nextjs',
        'firebase',
        'supabase',
        'gcp',
        'laravel',
    ]
    const ImageList = (
        <div className="flex overflow-x-scroll ">
            {tools.map((tool) => (
                <Image
                    key={tool}
                    src={`/toolImages/${tool}.png`}
                    className="md:w-20 w-10 rounded-md md:m-2 m-1"
                    alt={tool}
                    width={120}
                    height={120}
                />
            ))}
        </div>
    )
    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col h-full md:mr-12 items-start justify-start">
                    <h1 className="md:text-4xl text-3xl font-semibold">
                        Skills
                    </h1>
                    <div className="ml-5 mt-3">
                        <ul className="list-disc md:text-2xl text-xl font-semibold">
                            <li>Flutter</li>
                            <li>React Native</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col h-full md:mr-16 mr-8 items-center justify-start">
                    <h1 className="md:text-4xl text-3xl font-semibold ">
                        Certifications
                    </h1>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/images/aws_saa.png"
                            className="md:w-24 w-20 mt-2"
                            alt="aws"
                            width={128}
                            height={128}
                        />
                        <p className="md:text-lg font-semibold mt-2">AWS SAA</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-ful py-2">{ImageList}</div>
            <StrengthsFinder />
        </div>
    )
}
