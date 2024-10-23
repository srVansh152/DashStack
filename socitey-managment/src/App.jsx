import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RegistrationPage from "./Components/RegistrationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateSocietyForm from "./Models/CreateSocietyForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/create" element={<CreateSocietyForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
