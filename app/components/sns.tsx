import Link from 'next/link'
import Image from 'next/image'

export const Sns = () => {
    return (
        <div className="flex flex-row w-32 justify-between">
            <Link href="https://github.com/shogoisaji">
                <Image
                    src="/images/github.png"
                    className="w-8 h-8 hover:rotate-6 hover:scale-110"
                    alt="github"
                    width={32}
                    height={32}
                />
            </Link>
            <Link href="https://zenn.dev/s134">
                <Image
                    src="/images/zenn.png"
                    className="w-8 h-8 hover:rotate-6 hover:scale-110"
                    alt="zenn"
                    width={32}
                    height={32}
                />
            </Link>
            <Link href="https://twitter.com/_isaji134">
                <Image
                    src="/images/x.png"
                    className="w-8 h-8 hover:rotate-6 hover:scale-110"
                    alt="x"
                    width={32}
                    height={32}
                />
            </Link>
        </div>
    )
}
