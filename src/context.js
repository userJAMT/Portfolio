import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false, language: "EN" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "EN":
      return { ...state, 
        language: "EN" };
    case "ES":
      return { ...state, 
        language: "ES" };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};