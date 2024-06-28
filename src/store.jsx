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
  deleteAnnouncement: (id) =>
    set((state) => ({
      announcements: state.announcements.filter((_, index) => index !== id),
    })),
}));

export default useStore;
