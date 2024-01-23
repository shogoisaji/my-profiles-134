export const About = () => {
    return (
        <div
            className="flex flex-row items-center justify-center h-80"
            style={{ backgroundColor: '#5C967A' }}
        >
            <div className="">
                <img
                    src="/images/account-image.png"
                    className="w-32"
                    alt="account"
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold">About</h1>
                <p className="text-xl mt-4">This is about page.</p>
            </div>
        </div>
    )
}
