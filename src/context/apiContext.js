import React, { useReducer } from "react";
import { apiReducer } from "./apiReducer";
import { apiState } from "./apiState";

export const ApiContext = React.createContext();

const ApiProvider = (props) => {
  const [state, dispatch] = useReducer(apiReducer, apiState);

  return (
    <ApiContext.Provider value={{ apiState: state, dispatch }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
