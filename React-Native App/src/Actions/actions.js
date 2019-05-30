export const setUser = (type) => {
    return {
        type: 'SET_USER_TYPE',
        value: type
    }
}

export const addEvent = (event) => {
    return {
        type: 'ADD_EVENT',
        value: event
    }
}

export const setEvent = (event) => {
    return {
        type: 'SET_EVENT',
        value: event
    }
}
export const editEvent = (event) => {
    return {
        type: 'EDIT_EVENT',
        value: event
    }
}

export const addProfile = (profile) => {
    return {
        type: 'ADD_PROFILE',
        value: profile
    }
}

export const setProfile = (profile) => {
    return{
        type: 'SET_PROFILE',
        value: profile
    }
}


export const editProfile = (profile) => {
    return {
        type: 'EDIT_PROFILE',
        value: profile
    }
}

export const addComment = ( comment ) => {
    return{
        type: 'ADD_COMMENT',
        value: comment
    }
}