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
			const newList = state.todoList.filter(item => item.completed === false);
			return {
				...state,
				todoList: newList
			};
		case 'TOGGLE_TODO':
			const toggleList = state.todoList.map(item => {
				if (item.id === action.payload) {
					return { ...item, completed: !item.completed };
				} else {
					return item;
				}
			});
			return {
				...state,
				todoList: toggleList
			};
		default:
			return state;
	}
};
