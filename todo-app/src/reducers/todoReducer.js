// setup initial state
export const initialState = {
	todoList: [
		{
			task: 'Learn about reducers',
			completed: false,
			id: 123409384
		}
	]
};

// reducer function to handle adding to list and clearing completed
export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			console.log('added todo', state);
			return {
				...state,
				todoList: [
					...state.todoList,
					{
						task: action.payload,
						completed: false,
						id: Date.now()
					}
				]
			};
		case 'CLEAR_TODOS':
			const newList = state.todoList.filter(
				item => !item.className.includes('itemCompleted')
			);
			return {
				...state,
				todoList: newList
			};
		default:
			return state;
	}
};
