import { create } from "zustand";

interface ConfigState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
}));
