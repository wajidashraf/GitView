import axios from "axios";


export const loading = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(loading());
    const res = await axios.get("https://api.github.com/users");
    dispatch(setUsers(res.data));
    dispatch(loading());
  };
};


export const getSearchedUsers = (query)=>{
  return async(dispatch)=>{
    const res = await axios.get('https://api.github.com/search/users?q='+query.search)
    dispatch(setUsers(res.data.items))
  }
}
const setUsers = (users) => {
  return (dispatch) => {
    dispatch({ type: "GET_USERS", payload: users });
  };
};

const setSearchedUsers = (users) => {
  return (dispatch) => {
    dispatch({ type: "GET_SEARCHED_USERS", payload: users });
  };
};

export const hireUser = (login) => {
  return async(dispatch,getState) => {
    const state = await getState().userReducer
       const res = await axios.get(`https://api.github.com/users/${login}`)
       dispatch(hire(res.data))
       localStorage.setItem("hireUser",JSON.stringify([...state.hireuser,res.data]))
  }


};

const hire = (users)=>{
 return{ type: "HIRE_USER", payload: users }; 
}


