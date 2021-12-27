import React from "react";
import { Link } from "react-router-dom";
import { NotFound } from "../Mian/Loader";
import {setLocalStorage, getLocalStorage} from '../utilities/helperFun'
import "./userhire.css";

const HireList = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const hireUsers = getLocalStorage()
    setUsers(hireUsers);
  }, []);

  const delete_Handler = (e) => {
    let id = e.target.id;
    const newUsers = users.filter((user, i) => {
      return user.id !=id
    });
    setLocalStorage(newUsers)
    setUsers(newUsers);
  };
 
  

  return (
    <div className="container ">
      <h3>List of Hired Users.</h3>
      {users?.length > 0 ? (
        <div className=" hireList">
          {users.map((user) => {
            return (
              <div className="user_Card">
                <div className="img">
                  <img src={user.avatar_url} alt="{user.login}" />
                </div>
                <h2>{user.login.toUpperCase()}</h2>
                <strong>{user.type}</strong>
                <div className="action_Btn">
                  <Link to={`/user/${user.login}`}>
                    <button className="btn">Detail</button>
                  </Link>
                  <button className="btn" id={user.id} onClick={delete_Handler}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default HireList;
