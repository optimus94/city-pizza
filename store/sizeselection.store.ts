import { create } from "zustand";

type PizzaSelectionState = {
  selectedSizes: Record<string, any>;
  setSelectedSize: (pizzaId: string, size: any) => void;
  getSelectedSize: (pizzaId: string) => any;
  clearSelections: () => void;
};

const usePizzaSelectionStore = create<PizzaSelectionState>((set, get) => ({
  selectedSizes: {},
  setSelectedSize: (pizzaId, size) =>
    set((state) => ({
      selectedSizes: {
        ...state.selectedSizes,
        [pizzaId]: size,
      },
    })),
  getSelectedSize: (pizzaId) => get().selectedSizes[pizzaId],
  clearSelections: () => set({ selectedSizes: {} }),
}));

export default usePizzaSelectionStore;