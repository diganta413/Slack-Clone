const initialState = {
    user: null,
    room: null,
}

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state,user: action.user,};
            break;
        case "SET_ROOM":
            return {...state,room: action.room,};
            break;
    
        default:
            return state;
            break;
    }
}
export default initialState;