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
import ManageServiceProvider from "./Pages/ServiceProvider/ManageServiceProvider";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddHospital from "./Pages/Hospital/AddHospital";
import EditHospital from "./Pages/Hospital/EditHospital";
import ManageServices from "./Pages/Services/ManageServices";
import AddService from "./Pages/Services/AddService";
import EditService from "./Pages/Services/EditService";
import EditServiceProvider from "./Pages/ServiceProvider/EditServiceProvider";
import AddServiceProvider from "./Pages/ServiceProvider/AddServiceProvider";

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
          <Route exact path="/ManageServiceProvider" element={<ManageServiceProvider/>}/>
          <Route exact path="/ContactUs" element={<ContactUs/>}/>
          <Route exact path="/AddHospital" element={<AddHospital/>}/>
          <Route exact path="/EditHospital" element={<EditHospital/>}/>
          <Route exact path="/ManageServices" element={<ManageServices/>}/>
          <Route exact path="/AddService" element={<AddService/>}/>
          <Route exact path="/EditService" element={<EditService/>}/>
          <Route exact path="/EditServiceProvider" element={<EditServiceProvider/>}/>
          <Route exact path="/AddServiceProvider" element={<AddServiceProvider/>}/>
        </Routes>
        </HospitalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;