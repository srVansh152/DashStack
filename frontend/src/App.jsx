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
import Note from './Components/Note'
import Facilitymanagment from './Components/facilitymanagment'
import Announcment from './Components/Announcment'
import CreateComplain from './Components/CreateComplain'
import RequestTracking from './Components/RequestTracking'
import VisitorsLogs from './Components/VisitorsLogs'
import SecurityProtocols from './Components/SecurityProtocols'
import SecurityGuard from './Components/SecurityGuard'
import Expance from './Components/expance'
import UserLogin from './User/UserLogin'
import UAside from './User/UAside'
import Udashboard from './User/Udashboard'
import Upersonaldetail from './User/Upersonaldetail'
import UMaintenace from './User/UMaintenace'
import Uviw from './User/Uview'
import UcardDetail from './User/UcardDetail'




function App() {
  return (
    <div className="App">
      {/* <Aside/> */}
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RegistrationPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/password' element={<ForgetPassword />} />
            <Route path='/otp' element={<OtpVerification />} />
            <Route path='/admin/dashboard' element={<DashboardLayout />} />
            <Route path='/reset' element={<ResetPassword />} />
            <Route path='admin/editprofile' element={<Editprofile />} />
            <Route path='/admin/update' element={<Update />} />
            <Route path='/admin/residence' element={<Residence />} />
            <Route path='/ownerform' element={<OwnerForm />} />
            <Route path='/viewmodel' element={<Viewmodel />} />
            <Route path='/deletemodel' element={<Deletemodel />} />
            <Route path='/form' element={<Form />} />
            <Route path='/admin/financial' element={<FinanceManagment />} />
            <Route path='/admin/otherincome' element={<OtherIncome />} />
            <Route path='/addmain' element={<AddMaintain />} />
            <Route path='/memberlist' element={<MemberList />} />
            <Route path='/admin/note' element={<Note />} />
            <Route path='/admin/Facilitymanagment' element={<Facilitymanagment />} />
            <Route path='/admin/announcment' element={<Announcment />} />
            <Route path='/admin/Createcomplain' element={<CreateComplain />} />
            <Route path='/admin/requesttracking' element={<RequestTracking />} />
            <Route path='/admin/visitorslogs' element={<VisitorsLogs />} />
            <Route path='/admin/securityprotocols' element={<SecurityProtocols />} />
            <Route path='/admin/securityguard' element={<SecurityGuard />} />
            <Route path='/admin/expance' element={<Expance />} />
            //user routes 
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/user/aside' element={<UAside/>}/>
            <Route path='/user/udashboard' element={<Udashboard/>}/>
            <Route path='/user/upersonaldetail' element={<Upersonaldetail/>}/>
            <Route path='/user/Maintenace' element={<UMaintenace/>}/>
            <Route path='/user/Uview' element={<Uviw/>}/>
            <Route path='/user/Ucard' element={<UcardDetail/>}/>
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  )
}

export default App