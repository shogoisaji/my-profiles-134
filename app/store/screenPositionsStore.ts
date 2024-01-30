import { create } from 'zustand'

type ScreenPositions = {
    top: number
    about: number
    career: number
    portfolio: number
    footer: number
}

type State = {
    screenPositions: ScreenPositions
    setScreenPositions: (state: Partial<ScreenPositions>) => void
}

export const useScreenPositionsStore = create<State>((set) => ({
    screenPositions: {
        top: 0,
        about: 0,
        career: 0,
        portfolio: 0,
        footer: 0,
    },
    setScreenPositions: (state: Partial<ScreenPositions>) =>
        set((prevState) => ({
            screenPositions: { ...prevState.screenPositions, ...state },
        })),
}))
