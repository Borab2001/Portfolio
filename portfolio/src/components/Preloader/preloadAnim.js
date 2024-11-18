export const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    exit: {
        opacity: 1,
        transition: {duration: 0.2, delay: 0.2}
    }
}