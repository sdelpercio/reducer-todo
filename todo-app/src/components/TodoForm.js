import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
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
	return (
		<>
			<StyledForm>
				<StyledInput
					type='text'
					name='newTask'
					// value={}
					// onChange={}
					placeholder='enter a todo'
				/>
				<StyledButton type='submit'>Add to List</StyledButton>
				<StyledButton>Clear Completed</StyledButton>
			</StyledForm>
		</>
	);
};
export default TodoForm;
