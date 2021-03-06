import React , { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserInfo = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
        <AddUser onAddUser={addUserInfo}/>
        <UserList users={usersList}/>
    </>
  )
}

export default App;