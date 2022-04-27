import React from 'react';
import { Link } from 'react-router-dom';

import millify from 'millify';

import { Typography, Row, Col, Statistic } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    console.log(data);

    if(isFetching) return 'Loading...'

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
        </>
    );
};

export default Homepage;