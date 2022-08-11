export const logUserIn = (user) => {
    return {
        type: "logUserIn",
        payLoad: user
    }
}

export const logUserOut = () => {
    return {
        type: "logUserOut"
    }
}

