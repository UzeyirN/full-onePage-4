import React from 'react'
import { Helmet } from 'react-helmet'
import PopularCourses from '../components/Home/PopularCourses/PopularCourses';
import RegisterSec from '../components/Home/RegisterSection/RegisterSec';
import HeroSec from './../components/Home/HeroSection/HeroSec';
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSec />
            <PopularCourses />
            <RegisterSec />
        </>

    )
}

export default Home