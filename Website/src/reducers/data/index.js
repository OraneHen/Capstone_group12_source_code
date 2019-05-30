export const registration = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_START":
            return {
            ...state,
            [action.name]: {}
            }
        case "LOAD_END":
            return {
            ...state,
            [action.name]: action.response
            }
        case "LOAD_FAILURE":
            return {
            ...state,
            [action.name]: {}
            }
        default:
            return state
    }
}