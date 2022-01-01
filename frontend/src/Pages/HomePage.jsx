import React from "react";
import "../Styles/Home.css";
import HomeHeader from "../Components/HomeHeader";
import HomeBody from "../Components/HomeBody";

const HomePage = () => {
    return (
        <>
            <style>
                {`
        .home__section{
            height: 100vh !important;
        }
    `}
            </style>
            <section className='home__section'>
                <HomeHeader />
                <HomeBody />
            </section>
        </>
    );
};

export default HomePage;
