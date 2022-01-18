const defaultState = {
    text: '',
} 



export const pathReducer = (state = defaultState, action) => {
      
    switch (action.type) {
        case 'INPUT_PATH': 
            return {...state, text: action.payload }; 

        default : return state
    }
} 