import { create } from 'zustand';

export const count = create((set) => ({
    count: 0,
    add: () => set((state) => ({count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1})),
    clear: () => set(() => ({count: 0}))
}))