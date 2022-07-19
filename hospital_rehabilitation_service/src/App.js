import {Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
