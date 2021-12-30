import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
    return (
        <header className='google__header'>
            <div className='header__right'>
                <Link to='/' className='link'>
                    Gmail
                </Link>

                <Link to='/' className='link'>
                    Images
                </Link>

                <Link to='/' className='link'>
                    <AppsIcon />
                </Link>

                <Link to='/' className='link'>
                    <AccountCircleIcon style={{ fontSize: "50px" }} />
                </Link>
            </div>
        </header>
    );
};

export default Header;
