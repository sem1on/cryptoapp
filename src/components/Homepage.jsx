import React from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';

import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

import { Cryptocurrency, News, Loader } from './index';

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return <Loader/>

    return (
        <>
            <Title level={2} className='heading'>Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencis' value={globalStats.total}/></Col>
                <Col span={12}><Statistic title='Total Exchenges' value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title='Total Marcet Cap' value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title='Total 24h volume' value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title='Total Marcets' value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Cryptocurrencis</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrency'>Show More</Link></Title>
            </div>
            <Cryptocurrency simplified/>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    );
};

export default Homepage;