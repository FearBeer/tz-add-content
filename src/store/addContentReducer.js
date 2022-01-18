const content = [
	{
		type: 'panel',
		props: {
			width: 500,
			height: 200,
			visible: true
		},
	},
	{
		type: 'label',
		props: {
			caption: 'test',
			visible: false
		},
	},
	{
		type: 'button',
		props: {
			width: 100,
			height: 50,
			visible: true
		},
	}
]

export const addContentReducer = (state = content, action) => {
    
    switch (action.type) {
        case 'ADD_ELEMENT': 
            return [...state, action.payload] 
        case 'CHANGE_ELEMENT':
          console.log(state)
            return  [...state]
        default : return state
    }
} 