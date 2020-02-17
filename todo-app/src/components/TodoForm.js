import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import './Todo.css';
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
	width: 90%;
	padding: 1.5rem 4rem;
	border: none;
	border-radius: 5px;
	background-color: #fff176;
	color: black;
	margin-bottom: 2%;
	transition: 1s;

	&:hover {
		background-color: #f9a825;
		padding: 1.6rem 6rem;
		color: black;
		cursor: pointer;
	}
`;
const StyledList = styled.div`
	margin-bottom: 5%;
	width: 500px;
	font-size: 2rem;
	text-align: center;
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
	const toggleTodo = id => {
		dispatch({ type: 'TOGGLE_TODO', payload: id });
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
			<StyledList>
				{state.todoList.map(item => {
					if (item.completed === true) {
						return (
							<h4
								onClick={() => toggleTodo(item.id)}
								className='itemCompleted'
								key={item.id}
							>
								{item.task}
							</h4>
						);
					} else {
						return (
							<h4
								onClick={() => toggleTodo(item.id)}
								className='item'
								key={item.id}
							>
								{item.task}
							</h4>
						);
					}
				})}
			</StyledList>
		</>
	);
};
export default TodoForm;
