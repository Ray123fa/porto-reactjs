import PropTypes from "prop-types";
import { createContext } from "react";
import config from "./config";

const Context = createContext();

const ContextProvider = (props) => {
  return <Context.Provider value={config}>{props.children}</Context.Provider>;
};
ContextProvider.propTypes = {
  children: PropTypes.node,
};

export { ContextProvider };
export default Context;
