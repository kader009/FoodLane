export const headers = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const ChefCard = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const NavbarVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
};
