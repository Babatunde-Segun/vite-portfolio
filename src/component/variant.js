// export const fadeIn = (direction, delay) => {
//   return {
//     hidden: {
//       y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
//       opacity: 0,
//       x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
//       transition: {
//         type: "spring",

//         delay: 0.2,
//         // ease: [0.25, 0.6, 0.3, 0.8],
//       },
//     },
//     show: {
//       y: 0,
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         // duration: 1.4,
//         delay: 0.2,
//         // ease: [0.25, 0.25, 0.25, 0.75],
//       },
//     },
//   };
// };

export const fadeIn = (delay = 0.2) => {
  return {
    hidden: {
      y: 40,
      opacity: 0.5,
      // x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "spring",

        delay: `${delay}`,
        // ease: [0.25, 0.6, 0.3, 0.8],
      },
    },

    showWithContainer: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
        type: "tween",
      },
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // stiffness: 100,

        delay: `${delay}`,
        // staggerChildren: 0.3,
        // duration: 1,
        // ease: [0.25, 0.25, 0.25, 0.75],
      },
    },

    showWithStaggerChildren: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,

        // delay: 0.2,
        staggerChildren: 0.3,
        duration: 1,
        // ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    remove: {
      y: -40,
      opacity: 0.5,
    },
  };
};
