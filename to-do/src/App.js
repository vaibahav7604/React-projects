import { Route, Routes } from 'react-router';
import './App.css';
import Landing from './component/Landing';
import Login from './component/Login';
import TodoList from './component/TodoList';
import Signup from './component/Signup';

function App() {
  return (
  <Routes>
  <Route path='/'element={<Landing/>}/>
  <Route path='/login'element={<Login/>}/>
  <Route path='/signup'element={<Signup/>}/>
  <Route path='/to-do-list'element={<TodoList/>}/>
  </Routes>
  );
}

export default App;
