import React from "react";

import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Cryptocurrency, CryptoDetails, News } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>  
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route path='/' element={<Homepage />}/>
                        <Route path='/cryptocurrency' element={<Cryptocurrency />}/>
                        <Route path='/crypto/:coinId' element={<CryptoDetails />}/>
                        <Route path='/news' element={<News />}/>
                    </Routes>
                </div>
            </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    Crypto App by sem1om <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/cryptocurrency'>Cryptocurrency</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        </div>
    </div>
  );
}

export default App;
