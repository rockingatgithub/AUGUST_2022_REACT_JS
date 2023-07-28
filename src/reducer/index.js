const initialState = {
    isLoggedIn: false,
    user: {},
    counter: 0,
}


// return state based on action ....
function mainReducer (state = initialState, action) {

    switch (action.type) {
        case 'SET_USER':
            
            return { ...state, user: action.data, isLoggedIn: true };

        case 'INC_COUNTER': 
            if(state.counter >= 100) {
                return state
            }
            return { ...state, counter: state.counter + action.data };

        case 'DEC_COUNTER': 
            return { ...state, counter: state.counter - action.data };
    
        default:
            return state;
    }    

}

export default mainReducer