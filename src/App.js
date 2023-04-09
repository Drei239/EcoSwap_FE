
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup';
import AuthProvider from './Context/AuthProvider';
import UserInfo from './Pages/UserInfo';
import Signin from './Pages/Signin';

function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/user-info" element={<UserInfo/>}/>
     <Route path="/signin" element={<Signin />} />
     </Routes>
     </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
