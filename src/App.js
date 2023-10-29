import React from 'react'
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ScRNA from './components/scRNA/scRNA';
import SnATAC from './components/snATAC/snATAC';
import SnRNA from './components/snRNA/snRNA';
import SpRNA from './components/spRNA/spRNA';
const Home = () => <h1>Home</h1>;
function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
<div>
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/scRNA'>scRNA</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/snATAC'>snATAC</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/snRNA'>snRNA</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/spRNA'>spRNA</NavLink>{' '}
      <Routes>
        <Route path="/scRNA" element={<ScRNA/>} />
        <Route path="/snATAC" element={<SnATAC/>} />
        <Route path="/snRNA" element={<SnRNA/>} />
        <Route path="/spRNA" element={<SpRNA/>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Routes>
</div>
</BrowserRouter>
  );
}
export default App;
