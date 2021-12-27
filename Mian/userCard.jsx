import React, { useState } from "react";
import { hireUser, loading } from "../../Redux/actions/actions";
import {
  setLocalStorage,
  isAdded,
  getLocalStorage,
} from "../utilities/helperFun";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Card = ({ user }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handle_hiring = (e) => {
    const login = e.target.id;
    const hireUsers = getLocalStorage();
    const added = isAdded(hireUsers, login);
    if (added?.length > 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    dispatch(hireUser(login));
  };
  return (
    <div className="user_Card">
      <small className={!error ? "hide" : "error"}>Already Exists. </small>
      <div className="img">
        <img src={user.avatar_url} alt="{user.login}" />
      </div>
      <h2>{user.login.toUpperCase()}</h2>
      <strong>{user.type}</strong>
      <div className="action_Btn">
        <Link to={`/user/${user.login}`}>
          <button className="btn">Detail</button>
        </Link>

        <button className="btn" id={user.login} onClick={handle_hiring}>
          add
        </button>
      </div>
    </div>
  );
};

export default Card;
