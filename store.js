import { create } from 'zustand'

export const useStore = create((set) => ({
    bodyLocked: false,
    }
))