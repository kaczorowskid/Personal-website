export const textVariants = {
  hidden: {
    scale: 0,
    y: 100
  },
  animation: (i: number) => ({
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: 'spring'
    },
  })
}

export const imageVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1,
  },
  transition: { duration: 1 }
}