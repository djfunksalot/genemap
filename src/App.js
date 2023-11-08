import React from 'react'
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import RNA from './components/RNA/';
import ATAC from './components/ATAC/';
const Home = () => <h1>Home</h1>;
function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
<div>
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/RNA'>RNA</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/ATAC'>ATAC</NavLink>{' '}
      <Routes>
        <Route path="/RNA" element={<RNA/>} />
        <Route path="/ATAC" element={<ATAC/>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Routes>
</div>
</BrowserRouter>
  );
}
export default App;
