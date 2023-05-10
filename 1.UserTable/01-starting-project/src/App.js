import React, { useState } from 'react';
import AddUser from './User/AddUser';
import AddUserRef from './User/AddUser';
import UsersList from "./User/UsersList";
function App() {
  const [ users, setUsers ] = useState([]);
  function onAddUser(userName, age){
    setUsers((prevState) => {
      return [...prevState,{
        name : userName,
        age : age,
        id : Math.random().toString(),
      }]
    })
  }
  return (
    <>
      <AddUser onAddUser = {onAddUser}/>
      <UsersList users = {users}/> 
    </>
  );
}

export default App;
