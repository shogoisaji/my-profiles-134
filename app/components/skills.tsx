import Image from 'next/image'

export const Skills = () => {
    return (
        <div className="flex flex-row items-center justify-center p-8 h-60 bg-custom-green">
            <div className="absolute left-0 -rotate-90 md:block hidden">
                <h1 className="text-5xl font-bold">Skills</h1>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col h-full md:mr-16 mr-8 items-center justify-start">
                    <h1 className="md:text-3xl text-2xl font-semibold">
                        取得資格
                    </h1>
                    <Image
                        src="/images/aws_saa.webp"
                        className="w-32 mt-3"
                        alt="aws"
                    />
                </div>
                <div className="flex flex-col h-full md:mr-12 items-start justify-start">
                    <h1 className="md:text-3xl text-2xl font-semibold">
                        学習中
                    </h1>
                    <div className="ml-5 mt-3">
                        <ul className="list-disc md:text-2xl">
                            <li>Flutter</li>
                            <li>React Native</li>
                            <li>React</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-col flex-1 w-32 relative md:block hidden">
                    <Image
                        src="/toolImages/laravel.png"
                        className="absolute top-32 left-2 -rotate-12 w-12 rounded-md"
                        alt="laravel"
                    />
                    <Image
                        src="/toolImages/gcp.png"
                        className="absolute top-32 left-24 -rotate-4 w-12 rounded-md"
                        alt="gcp"
                    />
                    <Image
                        src="/toolImages/react.png"
                        className="absolute top-0 left-16 rotate-12 w-12 rounded-md"
                        alt="react"
                    />
                    <Image
                        src="/toolImages/nextjs.png"
                        className="absolute top-4 left-0 -rotate-12 w-12 rounded-md"
                        alt="nextjs"
                    />
                    <Image
                        src="/toolImages/typescript.png"
                        className="absolute top-20 left-0 rotate-6 w-12 rounded-md"
                        alt="typescript"
                    />
                    <Image
                        src="/toolImages/supabase.png"
                        className="absolute top-28 left-14 rotate-6 w-12 rounded-md"
                        alt="supabase"
                    />
                    <Image
                        src="/toolImages/firebase.png"
                        className="absolute top-16 left-20 -rotate-12 w-12 rounded-md"
                        alt="firebase"
                    />
                    <Image
                        src="/toolImages/flutter.png"
                        className="absolute top-12 left-8 -rotate-6 w-12 rounded-md"
                        alt="flutter"
                    />
                </div>
            </div>
        </div>
    )
}
