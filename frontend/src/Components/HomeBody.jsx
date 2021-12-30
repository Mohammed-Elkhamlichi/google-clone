import React from "react";
import googleLogo from "../Assets/images/google-logo.png";

import Search from "./Search";

const HomeBody = () => {
    return (
        <>
            <section className='google_body'>
                <div className='google__logo'>
                    <img src={googleLogo} alt='google.com' />
                </div>
                <Search hideButtons />
            </section>
        </>
    );
};

export default HomeBody;
