import React, { useEffect } from 'react'
 import {Link, useNavigate} from "react-router-dom";
const Protected = (props) => {
  const {Component} =props 
  const navigate=useNavigate();
  useEffect(()=>{
    let login=localStorage.getItem("login");
    if(!login){
        navigate("login")
    }
  });
  return (
    <div>
        <h1>njgdngjkd</h1>
        <Component/>
    </div>
  )
}
export default Protected;