import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { todoReducer, initialState } from '../reducers/todoReducer';

const StyledForm = styled.div`
	width: 300px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
const StyledInput = styled.input`
	width: 100%;
	padding: 1rem 3.5rem;
	border: 1px solid black;
	border-radius: 3px;
	background-color: white;
	margin-bottom: 2%;
`;
const StyledButton = styled.button`
	width: 100%;
	padding: 1.5rem 4rem;
	border: none;
	border-radius: 5px;
	background-image: linear-gradient(
		to right,
		#403b4a 0%,
		#e7e9bb 51%,
		#403b4a 100%
	);
	margin-bottom: 2%;

	&:hover {
		background-position: right center;
	}
`;

const TodoForm = () => {
	// setting up state and handle for todo input
	const [inputText, setInputText] = useState('');
	const handleChanges = e => {
		setInputText(e.target.value);
	};

	// setting up reducer to dispatch actions to add to list or clear completed
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const addToList = e => {
		e.preventDefault();
		dispatch({ type: 'ADD_TODO', payload: inputText });
		setInputText('');
	};
	const clearCompleted = e => {
		e.preventDefault();
		dispatch({ type: 'CLEAR_TODOS' });
	};

	return (
		<>
			<StyledForm>
				<StyledInput
					type='text'
					name='inputText'
					value={inputText}
					onChange={handleChanges}
					placeholder='enter a todo'
				/>
				<StyledButton onClick={addToList}>Add to List</StyledButton>
				<StyledButton onClick={clearCompleted}>Clear Completed</StyledButton>
			</StyledForm>
		</>
	);
};
export default TodoForm;
