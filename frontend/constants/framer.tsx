export const slideup = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i?: any) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.5, delay: i * 0.01 },
  }),
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export const slideLeft = {
  initial: {
    opacity: 0,
    x: "50%",
  },
  animate: (i?: any) => ({
    opacity: 1,
    x: "0%",
    transition: { duration: 0.8 },
  }),
  exit: {
    opacity: 0,
    x: "50%",
  },
};

export const slideRight = {
  initial: {
    right: "-100%",
  },
  enter: {
    right: "0%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    right: "-100%",
    transition: {
      duration: 1,
    },
  },
};


export const slide = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  enter: {
    opacity: 1,
    y: "0",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 1,
    y: "100vh",

    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideSidebarLeft = {
  initial: {
    right: "-100%",
  },
  enter: {
    right: "0%",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    right: "-100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
