import { create } from 'zustand';

type GlobalState = {
  collapsed: boolean;
  setCollapsed: () => void;
};

export const useGlobalStore = create<GlobalState>()((set) => ({
  collapsed: false,
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));
