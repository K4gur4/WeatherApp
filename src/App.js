import styled from "styled-components";
import Sidebar from "./components/sidebar/sideBar";
import {BrowserRouter, Route,Routes,Link} from  'react-router-dom'
import Today from "./components/today/today";
import Week from "./components/week/week";
import Hour from "./components/hour/hour.jsx";
import Home from "./components/main/main";
const Container= styled.div`
background-color: gray;
min-height: 100vh;
`
function App() {
  return (
   <Container>
     <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Today/>}/>
        <Route path='/week' element={<Week/>}/>
        <Route path='/hour' element={<Hour/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
   </Container>
  );
}

export default App;
