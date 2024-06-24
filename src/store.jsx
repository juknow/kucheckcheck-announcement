import create from "zustand";

const useStore = create((set) => ({
  announcements: [],
  addAnnouncement: (announcement) =>
    set((state) => ({
      announcements: [...state.announcements, announcement],
    })),
}));

export default useStore;
