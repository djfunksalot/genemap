import React from 'react'
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import RNA from './components/RNA/';
const Home = () => <h1>Home</h1>;
function App() {
  return (RNA());
}
export default App;
