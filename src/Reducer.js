const initialState = {
    user: null,
}

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_USER":
            return {...state,user: action.user,};
            break;
    
        default:
            return state;
            break;
    }
}
export default initialState;