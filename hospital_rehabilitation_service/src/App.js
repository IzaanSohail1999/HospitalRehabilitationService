import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import ManageUser from "./ManageUser";
import EditUser from "./EditUser";
import HospitalProvider from './context/HospitalContext';
import AddUser from "./AddUser";
import ManageHospital from "./ManageHospital";

function App() {
  return (
    <>
      <BrowserRouter>
      <HospitalProvider>
        <Routes>
          <Route exact path="/ManageHopital" element={<ManageHospital/>}/>
          <Route exact path="/AddUser" element={<AddUser/>} />
          <Route exact path="/EditUser" element={<EditUser/>} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/ResetPassword" element={<ResetPassword/>}/>
          <Route exact path="/ChangePassword" element={<ChangePassword/>}/>
          <Route exact path="/ManageUser" element={<ManageUser/>}/>
        </Routes>
        </HospitalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;