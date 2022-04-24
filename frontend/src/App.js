import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    
      <ToastContainer />
      <Routes>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
        <Route path = "/add" component={AddEdit} />
          
        <Route path = "/update/:id" component={AddEdit} />
        
        <Route path = "/view/:id" component={View} />
        
    
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

