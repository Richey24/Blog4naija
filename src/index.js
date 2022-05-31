import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CookiesProvider } from 'react-cookie'
import Post from './Post';
import Edit from './components/editor/Edit';
import Dashboard from './components/admin/Dashboard';
import AdminPost from './components/admin/Posts/AdminPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/more' element={<Post />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/adminpost' element={<AdminPost />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
