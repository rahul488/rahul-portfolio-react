import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSystemMode = create(
  persist(
    (set, get) => ({
      mode: 'light',
      darkMode: (color) => {
        set((state) => ({
          mode: color,
        }));
      },
    }),
    { name: 'mode' }
  )
);
