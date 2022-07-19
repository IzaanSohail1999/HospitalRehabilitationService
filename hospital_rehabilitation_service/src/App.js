import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/" element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;