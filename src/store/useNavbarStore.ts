import { create } from "zustand";

interface NavbarState {
  isMobileMenuOpen: boolean;
  activeItem: string;
  isScrolled: boolean;
  toggleMobileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  setActiveItem: (item: string) => void;
  setIsScrolled: (isScrolled: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isMobileMenuOpen: false,
  activeItem: "Home",
  isScrolled: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setActiveItem: (item: string) => set({ activeItem: item }),
  setIsScrolled: (isScrolled: boolean) => set({ isScrolled }),
}));
