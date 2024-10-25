import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './Components/RegistrationPage'
import Login from './components/Login'
import ForgetPassword from './components/ForgetPassword'
import OtpVerification from './components/OtpVerification'
import DashboardLayout from './Components/DashboardLayout'
import ResetPassword from './Components/ResetPassword'
import Editprofile from './Components/Editprofile'

import Update from './Components/Update'

import Aside from './Components/Aside'




function App() {
  return (
    <div className="App">
        <Aside/>
        <div className="main w-[83%] ml-[17%]">
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



        </Routes>
        </BrowserRouter>
    
        </div>
    
    </div>
  )
}

export default App
