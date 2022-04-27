import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../image/cryptocurrency.png';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="lodo-container">
                <Avatar/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto</Link>
                </Typography.Title>
            </div>
            
        </div>
    );
};

export default Navbar;