import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'custom-green': '#5C967A',
                'custom-yellow': '#F1DBA3',
                'custom-blue': '#A1CCD1',
                'custom-blown': '#7A5B51',
                'custom-darkBlue': '#474F7A',
                'custom-darkGreen': '#4A8E8E',
            },
        },
    },
    plugins: [],
}
export default config
