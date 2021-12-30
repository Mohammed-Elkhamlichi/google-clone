import React from "react";
import "../Styles/media_query/footer-media.css";
import "../Styles/footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='copy-right'>
                <span>
                    <a
                        rel='noreferrer'
                        href='https://mohammed-elkhamlichi.netlify.app'
                        target='_blank'
                    >
                        Mohamemd Elkhamlichi{" "}
                    </a>
                </span>
                &copy; <span>{year}</span>
            </div>
        </div>
    );
};

export default Footer;
