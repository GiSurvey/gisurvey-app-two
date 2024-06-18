import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './page/login/Login'
import SignUp from './page/signup/SignUp'
import { Main } from './page/dashboard'

const App: React.FC = () => {

  // Protected route component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

  return (
    <AuthProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/*" element={<PrivateRoute><Main /></PrivateRoute>} />
        </Routes>
    </Router>

    </AuthProvider>

  );
};

export default App;