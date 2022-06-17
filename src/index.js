import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CookiesProvider } from 'react-cookie'
import Post from './Post';
import Main from './components/editor/Main';
import Dashboard from './components/admin/Dashboard';
import AdminPost from './components/admin/Posts/AdminPost';
import Pages from './components/admin/Pages/Pages';
import Comment from './components/admin/Comments/Comment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/more' element={<Post />} />
        <Route path='/edit' element={<Main />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/adminpost' element={<AdminPost />} />
        <Route path='/page' element={<Pages />} />
        <Route path='comment' element={<Comment />} />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
