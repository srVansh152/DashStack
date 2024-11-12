import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import OtpVerification from './pages/OtpVerification'
import DashboardLayout from './Components/DashboardLayout'
import ResetPassword from './pages/ResetPassword'
import Editprofile from './Components/Editprofile'
import "./App.css"

import Update from './Components/Update'


import Residence from './Components/Residence'
import OwnerForm from './Components/OwnerForm'
import Viewmodel from './Models/Viewmodel'
import Deletemodel from './Models/Deletemodel'
import { Form } from './Components/Form'
import FinanceManagment from './Components/FinanceManagment'
import OtherIncome from './Components/OtherIncome'
import AddMaintain from './Models/AddMaintain'
import MemberList from './Components/MemberList'
import Note from './Components/note'
import Facilitymanagment from './Components/facilitymanagment'
import Announcment from './Components/Announcment'
import CreateComplain from './Components/CreateComplain'
import RequestTracking from './Components/RequestTracking'
import VisitorsLogs from './Components/VisitorsLogs'
import SecurityProtocols from './Components/SecurityProtocols'




function App() {
  return (
    <div className="App">
      {/* <Aside/> */}
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/password' element={<ForgetPassword/>}/>
          <Route path='/otp' element={<OtpVerification/>}/>
          <Route path='/dashboard' element={<DashboardLayout/>}/>
          <Route path='/reset' element={<ResetPassword/>}/>
          <Route path='/editprofile' element={<Editprofile/>}/>
          <Route path='/update' element={<Update/>}/>
          <Route path='/residence' element={<Residence/>}/>
          <Route path='/ownerform' element={<OwnerForm/>}/>
          <Route path='/viewmodel' element={<Viewmodel/>}/>
          <Route path='/deletemodel' element={<Deletemodel/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/financial' element={<FinanceManagment/>}/>
          <Route path='/otherincome' element={<OtherIncome/>}/>
          <Route path='/addmain' element={<AddMaintain/>}/>
          <Route path='/memberlist' element={<MemberList/>}/>
          <Route path='/note' element={<Note/>}/>
          <Route path='/Facilitymanagment' element={<Facilitymanagment/>}/>
          <Route path='/announcment' element={<Announcment/>}/>
          <Route path='/Createcomplain' element={<CreateComplain/>}/>
          <Route path='/requesttracking' element={<RequestTracking/>}/>
          <Route path='/visitorslogs' element={<VisitorsLogs/>}/>
          <Route path='/securityprotocols' element={<SecurityProtocols/>}/>
        </Routes>
        </BrowserRouter>

      </div>

    </div>
  )
}

export default App
