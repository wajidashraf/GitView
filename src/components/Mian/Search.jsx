import React, { useEffect, useRef, useState } from "react";
import { getSearchedUsers, getUsers, loading } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const Search = () => {

  useEffect(()=>{
    inpRef.current.focus()
  },[])

  

  const inpRef = useRef()
  const dispatch = useDispatch()
  const [query, setQuery] = useState({
    search: "",
    isClear: false,
  });

  const searchHandler = (e) => {
    setQuery((pre)=>{
      return{
        ...pre,
        search:e.target.value
      }
    });
  };

  const clearQuery=()=>{
    return null
  }

  const handleKey =(e)=>{
    if(e.key =="Enter"){
      getQuery()
  }}

  const getQuery = () => {
    dispatch(getSearchedUsers(query))
  };


  return (
    <div className="search_container">
      <div className="search_box">
        <input
        ref ={inpRef}
          type="text"
          onChange={searchHandler}
          value={query.search}
          className="search_field"
          placeholder="Search User"
          onKeyDown={handleKey} 
        />
          <button className="search_btn" onClick={getQuery}>
            Search
          </button>
     
       
      </div>
    </div>
  );
};

export default Search;
