import Link from 'next/link'
import Image from 'next/image'

export const Sns = (props: { iconSize: number }) => {
    return (
        <div className="flex flex-row justify-between">
            <Link href="https://github.com/shogoisaji">
                <Image
                    src="/images/github.png"
                    className=" hover:rotate-6 hover:scale-110 md:mx-2 mx-1"
                    alt="github"
                    width={props.iconSize}
                    height={props.iconSize}
                />
            </Link>
            <Link href="https://zenn.dev/s134">
                <Image
                    src="/images/zenn.png"
                    className="hover:rotate-6 hover:scale-110 md:mx-2 mx-1"
                    alt="zenn"
                    width={props.iconSize}
                    height={props.iconSize}
                />
            </Link>
            <Link href="https://twitter.com/_isaji134">
                <Image
                    src="/images/x.png"
                    className="hover:rotate-6 hover:scale-110 md:mx-2 mx-1"
                    alt="x"
                    width={props.iconSize}
                    height={props.iconSize}
                />
            </Link>
        </div>
    )
}
