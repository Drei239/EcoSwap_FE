import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import AuthProvider from "./Context/AuthProvider";
import UserInfo from "./Pages/UserInfo";
import Signin from "./Pages/Signin";
import HomePage from "./Pages/HomePage";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </AuthProvider>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
