import React from 'react';
import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import { useState } from "react";
import './AddUser.css';

function AddUser(props) {
  const [ userName, setUserName ] = useState("");
  const [ age, setAge ] = useState("");
  const [ error, setError ] = useState();
  
  function addUser(event){
    event.preventDefault();
    if(validating() === true){
        props.onAddUser(userName, age);
        setUserName("");
        setAge("");
    }
  }

  function closeModal(){
    setError(null);
  }

  function validating(){
    if(userName.trim().length === 0 || /^[A-Za-z]+$/.test(userName) === false){
      return setError({
          title: "Invalid Input",
          message: "Please enter a valid name",
      });
    } 
    if(+age < 1 ||  age.trim().length === 0){
      return setError({
          title: "Invalid Age",
          message: "Please enter a valid age",
      });
    }
    return (true);
  }

  console.log(error);

  return (
    <>
      {error && <ErrorModal closeModal= {closeModal} title = {error.title} message = {error.message}/>}
      <Card>
        <form onSubmit = {addUser} className = "input">
            <label htmlFor = "username">User name:</label>
            <input type = "text" id = "username" value = {userName} onChange = {(event) => setUserName(event.target.value)}/>
            <label htmlFor = "age">Age:</label>
            <input type = "number" id = "age" value = {age} onChange = {(event)=> setAge(event.target.value)}/>
            <Button type = "submit" >Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
