import React, { useReducer } from 'react';
import styled from 'styled-components';
import { todoReducer, initialState } from '../reducers/todoReducer';

const StyledList = styled.div`
	margin-bottom: 5%;
	width: 500px;
	font-size: 2rem;
	text-align: center;
`;

const TodoList = () => {
	// setting up reducer to pull from state
	const [state, dispatch] = useReducer(todoReducer, initialState);

	return (
		<>
			<StyledList>
				{state.todoList.map(item => (
					<h4>{item.task}</h4>
				))}
			</StyledList>
		</>
	);
};
export default TodoList;
