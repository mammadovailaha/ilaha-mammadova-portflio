import { create } from "zustand";

type ScrollState = {
  progress: number;
  pointer: [number, number];
  setProgress: (progress: number) => void;
  setPointer: (pointer: [number, number]) => void;
};

export const useScrollStore = create<ScrollState>((set) => ({
  progress: 0,
  pointer: [0, 0],
  setProgress: (progress) => set({ progress }),
  setPointer: (pointer) => set({ pointer }),
}));
