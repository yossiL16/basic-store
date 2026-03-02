import { create } from 'zustand';

export const useProduct = create((set) => ({
    count: 0,
    add: () => set((state) => ({count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1})),
    clear: () => set(() => ({count: 0})),
    products: [],
    addPtoduct: (obj) => set((state) => ({products: [...state.products, obj]})),
    remmove: (filterList) => set(() => ({products: filterList})) 

}))