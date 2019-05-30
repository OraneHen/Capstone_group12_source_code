export const registration = (state = {
  registration:{}
}, action) => {
  switch (action.type) {
    case "UPDATE_REGISTRATION":
      return {
        ...state,
        registration: { 
          ...state.registration,
          ...action.value
        }
      }
   
    default:
      return state
  }
}