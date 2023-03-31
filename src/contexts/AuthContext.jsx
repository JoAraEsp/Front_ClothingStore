import React, { createContext, useState } from 'react';

export const AuthContext = React.createContext({
    setRegisterData: () => {}
});


export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    authToken: null,
    user: null,
    registerData: null
  });

  const setRegisterData = (data) => { 
    setAuthState({
      ...authState,
      registerData: data,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, setRegisterData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;