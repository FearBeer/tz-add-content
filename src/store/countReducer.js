const initialState = {
    count: 0,
}

export const countReducer = (state = initialState, action) => {
    console.log('state: ' , state);
    
    switch(action.type) {
        case 'INCREMENT' : 
        return {
            ...state,
            count : state.count + 1
        }

        default: return state
    }
}

 