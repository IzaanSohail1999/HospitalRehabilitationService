import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import ManageUser from "./ManageUser";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
          <Route exact path="/ChangePassword" element={<ChangePassword/>}/>
          <Route exact path="/ManageUser" element={<ManageUser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;