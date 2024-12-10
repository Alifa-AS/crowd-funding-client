import React from 'react';
import Banner from './Banner';
import Active from './Active';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Faq from './Faq';

const Home = () => {
    const campaigns = useLoaderData(); //load data from loader
    console.log("campaigns data:", campaigns)
    return (
        <div>
            <Banner />
            <Active campaigns={campaigns} /> //props
            <About />
            <Faq />
        </div>
    );
};

export default Home;