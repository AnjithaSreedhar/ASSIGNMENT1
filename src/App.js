import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import VIewDetails from './components/VIewDetails';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/v' element={<VIewDetails/>}></Route>
        <Route path='/add' element={<BlogForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
