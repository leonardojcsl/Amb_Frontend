import styled from "styled-components";
import BasicGrid from "./components/GridMain";
import { Header } from "./components/Header";
import backImage from "./images/vermelhoBack.png"


const Main = styled.main`  
  background-image: url(${backImage});
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center 
`

function App() {
    return(
    <Main>
      <Header/>             
      <BasicGrid/>      
    </Main>
  );
}

export default App;
