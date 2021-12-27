import './App.css';
import Navbar from './components/header/Navbar';
import Main from './components/Mian/Main';
import HireList from './components/userHireList/HireList'
import UserDetaile from './components/detaile/UserDetaile'
import Login from './components/auth/Login'

import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>

       <Route path = '/auth/login' element={<Login/>}/>
       <Route path = '/' element={<Main/>}/>
       <Route path = '/users/:username' element={<Main/>}/>
       <Route path = '/list' element={<HireList/>}/>
       <Route path = '/user/:login' element={<UserDetaile/>}/>
     </Routes>
    </div>
  );
}

export default App;
