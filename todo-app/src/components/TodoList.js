import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StyledList = styled.div`
	margin-bottom: 5%;
	width: 500px;
	font-size: 2rem;
	text-align: center;
`;

const TodoList = () => {
	return (
		<>
			<StyledList>
				<Todo />
			</StyledList>
		</>
	);
};
export default TodoList;
