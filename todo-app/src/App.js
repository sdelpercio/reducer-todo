import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100vh;
    font-size: 62.5%;
    background-image: linear-gradient( 135deg, #92FFC0 10%, #002661 100%);
  }
`;
const StyledDiv = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const StyledTitle = styled.h2`
	font-size: 4rem;
	margin: 5% auto;
	border-bottom: 1px solid black;
	width: 400px;
	text-align: center;
`;
function App() {
	return (
		<StyledDiv>
			<GlobalStyle />
			<StyledTitle>Todo...</StyledTitle>
			<TodoList />
			<TodoForm />
		</StyledDiv>
	);
}

export default App;
