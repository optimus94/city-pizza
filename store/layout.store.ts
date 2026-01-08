import { create } from "zustand";

type layoutState = {
    headerHeight: number;
    setHeaderHeight: (height: number) => void;
}

const useLayoutStore = create <layoutState>((set) => ({
    headerHeight: 0,
    setHeaderHeight: (height) => set({headerHeight: height}),
    
}));

export default useLayoutStore;