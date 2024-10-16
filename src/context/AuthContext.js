import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState(() => {
    // Get users from localStorage if they exist, otherwise initialize as an empty array
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    // If localStorage is empty, initialize with a default user
    if (!storedUsers || storedUsers.length === 0) {
      const defaultUser = [{ email: 'admin@gisurvey.com', password: '123456' }];
      localStorage.setItem('users', JSON.stringify(defaultUser)); // Set default user in localStorage
      return defaultUser;
    }

    return storedUsers;
  });

  // Register function to store new users in localStorage
  const register = (email, password) => {
    // Check if the email already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert('Email already registered. Please use a different email.');
      return false; // Registration failed due to duplicate email
    }

    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    return true; // Registration successful
  };

  // Login function to authenticate based on the stored users
  const login = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      return true; // Login successful
    }
    return false; // Login failed
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
