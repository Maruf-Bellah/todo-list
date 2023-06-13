

import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Todo from './component/Todo/Todo';
import Nothing from './component/Nothing/Nothing';
import Register from './component/Login/Register';
import Navbar from './component/Navbar/Navbar';



function App() {
  return (
    <div className="App overflow-x-hidden " >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Todo' element={<Todo></Todo>}></Route>
        <Route path='/Navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='*' element={<Nothing></Nothing>}></Route>
      </Routes>
    </div>
  );
}

export default App;
