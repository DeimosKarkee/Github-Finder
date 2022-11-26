import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const setloading = () => dispatch({ type: "SET_LOADING" });

  const getUsers = async (text) => {
    setloading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `https://api.github.com/search/users?${params}`
    );
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, getUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
