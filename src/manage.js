import { create } from 'zustand';

export const useProduct = create((set) => ({
    
    count: 0,
    add: () => set((state) => ({count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1})),
    clear: () => set(() => ({count: 0})),
    products: [],
    addProduct: (obj) => set((state) => ({products: [...state.products, obj]})),
    removeProduct: (id) => set((state) => ({products: state.products.filter(p => p.id !== id)})),
    sumPrice: 0,
    addPrice: (price) => set((state) => ({sumPrice: state.price + price})),
    decPrice: (price) => set((state) => ({sumPrice: state.price - price}))

}))