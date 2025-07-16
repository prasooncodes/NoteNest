import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useNotesStore = create(
  persist(
    (set) => ({
      notes: [],
      category: null,
      setNotes: (notes) => set({ notes }),
      setCategory: (category) => set({ category }),
    }),
    {
      name: "notes-store",
      storage: createJSONStorage(() => localStorage), // ✅ modern API
    }
  )
);

export default useNotesStore;
