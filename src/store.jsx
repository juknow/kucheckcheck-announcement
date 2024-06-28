import create from "zustand";

const useStore = create((set) => ({
  announcements: [],
  addAnnouncement: (announcement) =>
    set((state) => ({
      announcements: [...state.announcements, announcement],
    })),
  updateAnnouncement: (id, updatedAnnouncement) =>
    set((state) => ({
      announcements: state.announcements.map((announcement, index) =>
        index === id ? updatedAnnouncement : announcement
      ),
    })),
}));

export default useStore;
