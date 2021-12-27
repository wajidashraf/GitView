import React, { useState, useEffect } from "react";
import { Loader } from "../Mian/Loader";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detaile.css";

const UserDetaile = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const { login } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    userDetail();
    userRepo();
  }, [login]);

  const userDetail = () => {
    axios.get(`https://api.github.com/users/${login}`).then((res) => {
      console.log("loginUser", res.data);
      setUser(res.data);
    });
  };

  const userRepo = () => {
    axios.get(`https://api.github.com/users/${login}/repos`).then((res) => {
      // console.log("loginRepo", res.data);
      setRepos(res.data);
    });
  };

  if (repos.length > 10) {
    const newRepos = repos.slice(0, 10);
    setRepos(newRepos);
  }

  const {
    avatar_url,
    html_url,
    name,
    location,
    company,
    created_at,
    hireable,
    bio,
    blog,
    url,
    following,
    followers,
  } = user;
  const createdAt = new Date(created_at).toLocaleDateString();

  return (
    <div>
      {avatar_url ? (
        <div className="detaile">
          <div className="actions_btn">
            <button
              className="btn back"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button> 
                  {!hireable ? (
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-check-square" aria-hidden="true"></i>
                  )}
                  <strong>Hireable</strong>
                
          </div>
          <div className="about_user">
            <div className="user_img_box">
              <div className="user_img">
                <img src={avatar_url} alt={user.login} />
              </div>
              <div>
                <a href={html_url}>
                  <button className="viewProfile">View Profile</button>
                </a>
                
              </div>
            </div>
            <div className="user_info">
              <div className="title">
                <h2 style={{ marginBottom: "5px" }}>Name : {name} </h2>
                <i className="pills">
                  <span>Location : {location ? location : "Nill"}</span>
                </i>
              </div>
              <h3 className="user_bio">ABOUT USER</h3>
              <p className="bio">{bio}</p>
              <div className="folow">
                <p>
                  <strong>UserName</strong> :{" "}
                  <span className=" px-2">{user.login}</span>
                </p>
                <p>
                  <strong>Company</strong> :{" "}
                  <span className=" px-2">{company ? company : "Nill"}</span>
                </p>
                <p>
                  <strong>Website</strong> :{" "}
                  <span className=" px-2">{blog ? blog.slice(7) : "Nill"}</span>
                </p>

                <p>
                  <strong>Folowers : </strong>
                  {followers}
                </p>
                <p>
                  <strong>Folowing : </strong>
                  {following}
                </p>

                <p>
                  <strong>Create</strong> :{" "}
                  <span className=" px-2">{createdAt}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="user_repos">
            <h3 className="pills p ">Repositories</h3>
            {repos.map((repo, index) => {
              return (
                <div className="repos">
                  <span>{index + 1} : </span>{" "}
                  <a target="_blank" href={repo.html_url}>
                    {repo.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserDetaile;
