const defaultState = {
    text: '',
} 

export const newValueReducer = (state = defaultState, action) => {
      
    switch (action.type) {
        case 'INPUT_NEW_VALUE': 
            return {...state, text: action.payload }; 

        default : return state
    }
} 