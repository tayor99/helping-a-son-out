import AuthLayout from "./components/AuthLayout/AuthLayout";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FogotPassword from "./Pages/FogotPassword/FogotPassword";
import Resetpassword from "./Pages/ResetPassword/Resetpassword";
import ProofIdentity from "./Pages/ProofIdentity/ProofIdentity";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<FogotPassword />} />
            <Route path="/reset-password" element={<Resetpassword />} />
            <Route path="/proof-identity" element={<ProofIdentity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
