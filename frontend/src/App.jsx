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
import UOtherincome from './User/UOtherincome'
import UsecurityProtocol from './User/UsecurityProtocol'
import Uviw from './User/Uview'
import UcardDetail from './User/UcardDetail'
import UpaymentCard from './User/UpaymentCard'
import SLogin from './Security/SLogin'
import SemergencyManagment from './Security/SemergencyManagment'
import Svisitor from './Security/Svisitor'
import Uchat from './User/Uchat'





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
            <Route path='/reset' element={<ResetPassword />} />
            <Route path='/viewmodel' element={<Viewmodel />} />
            <Route path='/deletemodel' element={<Deletemodel />} />
            <Route path='/ownerform' element={<OwnerForm />} />
            <Route path='/addmain' element={<AddMaintain />} />



            // Admin routes
            <Route path='/admin'>
            <Route path='dashboard' element={<DashboardLayout />} />
            <Route path='editprofile' element={<Editprofile />} />
            <Route path='update' element={<Update />} />
            <Route path='residence' element={<Residence />} />
            <Route path='form' element={<Form />} />
            <Route path='financial' element={<FinanceManagment />} />
            <Route path='otherincome' element={<OtherIncome />} />
            <Route path='memberlist' element={<MemberList />} />
            <Route path='note' element={<Note />} />
            <Route path='Facilitymanagment' element={<Facilitymanagment />} />
            <Route path='announcment' element={<Announcment />} />
            <Route path='Createcomplain' element={<CreateComplain />} />
            <Route path='requesttracking' element={<RequestTracking />} />
            <Route path='visitorslogs' element={<VisitorsLogs />} />
            <Route path='securityprotocols' element={<SecurityProtocols />} />
            <Route path='securityguard' element={<SecurityGuard />} />
            <Route path='expance' element={<Expance />} />
            </Route>
          
            //user routes
            <Route path='/user'>
            <Route path='login' element={<UserLogin />} />
            <Route path='aside' element={<UAside/>}/>
            <Route path='udashboard' element={<Udashboard/>}/>
            <Route path='upersonaldetail' element={<Upersonaldetail/>}/>
            <Route path='Maintenace' element={<UMaintenace/>}/>
            <Route path='Uview' element={<Uviw/>}/>
            <Route path='Ucard' element={<UcardDetail/>}/>
            <Route path='Upaymentcard' element={<UpaymentCard/>}/>
            <Route path='otherincome' element={<UOtherincome/>}/>
            <Route path='usecurityprotocol' element={<UsecurityProtocol/>}/>
            <Route path='uchat' element={<Uchat/>}/>
            </Route>
            
            //security routes
            <Route path="/security">
            <Route path='Slogin' element={<SLogin/>}/>
            <Route path='Semergency' element={<SemergencyManagment/>}/>
            <Route path='Svisitor' element={<Svisitor/>}/>
            </Route>
           
          </Routes>
        </BrowserRouter>

      </div>

    </div>
  )
}

export default App