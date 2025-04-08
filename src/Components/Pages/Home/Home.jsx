import React from 'react';
import Banner from './Banner';
import Active from './Active';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Faq from './Faq';
import HowToWork from './HowToWork';
import Team from './OurTeam/Team';

const Home = () => {
    const campaigns = useLoaderData(); //load data from loader
    // console.log("campaigns data:", campaigns);
    return (
        <div>
            <Banner />
            <Active /> 
            <About />
            <HowToWork />
            <Faq />
            <Team />
        </div>
    );
};

export default Home;