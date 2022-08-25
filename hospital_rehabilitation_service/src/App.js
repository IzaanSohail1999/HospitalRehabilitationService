import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/Password/ResetPassword";
import ChangePassword from "./Pages/Password/ChangePassword";
import ManageUser from "./Pages/User/ManageUser";
import EditUser from "./Pages/User/EditUser";
import HospitalProvider from '../src/context/HospitalContext';
import AddUser from "./Pages/User/AddUser";
import ManageHospital from "./Pages/Hospital/ManageHospital";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Cookie from "./Pages/Cookie/Cookie";

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
          <Route exact path="/TermsAndConditions" element={<TermsAndCondition/>}/>
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route exact path="/Cookie" element={<Cookie/>}/>
        </Routes>
        </HospitalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;