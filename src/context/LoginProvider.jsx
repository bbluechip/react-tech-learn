import { createContext, useState, useContext } from "react";
// creating
export const LoginContext = createContext();

// Proiding
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = { user, setUser };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

// consuming Hook

export const useLogginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
