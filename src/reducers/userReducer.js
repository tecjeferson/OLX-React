const initialState = {
    email: ''
};

export const userReducer = (state = initialState, action) => {
    if (action.type === 'SET_EMAIL') {
        return { ...state, email: action.payload.email };
    }


    return state;
}


// export const userReducer = {
//     test:""
// }