import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './package/components/Dashboard';
import Layout from './package/components/layout/Layout';
import Login from './page/authorization/Login';
import Products from './package/components/Products';
import AddProducts from './package/AddProducts';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path="login" element={<Login />}/>
      <Route path="products" element={<Products/>}/>
      <Route path='addproducts'element={<AddProducts/>}/>
    <Route path="dashboard" element={<Dashboard/>}>
    </Route>
    </Routes>
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
