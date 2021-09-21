
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import axios from 'axios'
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState(null)



  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((result)=>{setUsers(result.data)} ) 
    .catch((err) => console.log(err))
    
  },[])



  return (
    <div className='App-header'>
      <h1> Users List</h1>
      {users  ? <UsersList users={users}   /> :<Loading />}
    </div>
  );
}

export default App;


