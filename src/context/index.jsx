import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Tester");
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ value, setValue, count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MyContext);
};

MyProvider.propTypes = {
  children: PropTypes.any,
};

export default MyProvider;
