import React from 'react'
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ScRNA from './components/scRNA/scRNA';
import SnATAC from './components/snATAC/snATAC';
import SnRNA from './components/snRNA/snRNA';
const Home = () => <h1>Home</h1>;
function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
<div>
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/scRNA'>scRNA</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/snATAC'>snATAC</NavLink>{' '}
      <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/snRNA'>snRNA</NavLink>{' '}
      <a href="/samui/from.html?url=susztaklab.com/samui/files/&s=sample_HK2671&s=sample_HK2770&s=sample_HK2844&s=sample_HK2852&s=sample_HK2871&s=sample_HK2873&s=sample_HK3035">spRNA</a>
      <Routes>
        <Route path="/scRNA" element={<ScRNA/>} />
        <Route path="/snATAC" element={<SnATAC/>} />
        <Route path="/snRNA" element={<SnRNA/>} />
        <Route render={() => <h1>Page not found</h1>} />
      </Routes>
</div>
</BrowserRouter>
  );
}
export default App;
