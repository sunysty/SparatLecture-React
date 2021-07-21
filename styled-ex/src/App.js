import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MyStyled bgColor="red">hello React!🤟</MyStyled>
    </div>
  );
}

const MyStyled= styled.div`
  width: 250px;
  min-height: 250px;
  padding: 10px;
  border-radius: 50%;
  color: #fff;
  font-size:30px;
  display:flex;
  align-items: center;
  &:hover{
    background-color:#ddd;
  }
  background-color: ${(props) => (props.bgColor? "skyblue" : "purple")};//props로 데이터 넘겨줄수 있음
`;

export default App;
