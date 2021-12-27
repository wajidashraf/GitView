import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./userCard";
import { getUsers, loading } from "../../Redux/actions/actions";
import Search from "./Search";
import { Loader, NotFound } from "./Loader";
import "./main.css";
import axios from "axios";

const Main = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.userReducer);
  const searchedUsers = useSelector(
     (state) => state.searchReducer.searchedUsers);

  const [hide, setHide] = useState('hide');
  let users = [];
  users = usersState.users;

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", (event)=>{
      if(window.scrollY >500)
      {
        setHide('')
      }
      else if(window.scrollY <500)
      {
        setHide('hide')
      }
    });
  }, [window.scrollY]);

const goTop = ()=>{  
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

 

  return (
    <div className="container" onscroll={''}>
      <i className={'fa fa-arrow-circle-up' + hide} onClick={goTop}  aria-hidden="true"></i>
      <Search />
      {usersState.loading ? (
        <Loader />
      ) : users.length === 0 ? (
        <NotFound />
      ) : (
        <div className=" main grid">
          {users.map((user) => {
            return <Card user={user} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Main;
