export const userLogged = (state = null, action) => {

    switch (action.type) {
        case "logUserIn":
            return action.payLoad;
            break;
        case "logUserOut":
            return null;
            break;
        default:
            return state;
            break;
    }

}