import React from "react";
import googleLogo from "../Assets/images/google-logo.png";
import ImageIcon from "@mui/icons-material/Image";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import BookIcon from "@mui/icons-material/Book";
import FlightIcon from "@mui/icons-material/Flight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GoogleIcon from "@mui/icons-material/Google";
import Search from "./Search";
import { Link } from "react-router-dom";

const SearchHeader = () => {
    return (
        <>
            <header className='search_header'>
                <div className='header_top'>
                    <div className='search_google_logo'>
                        <Link to='/'>
                            <img
                                className='google_image'
                                src={googleLogo}
                                alt='google.com'
                            />
                        </Link>
                    </div>
                    <div className='search_form'>
                        <Search className='search_input' hideButtons />
                    </div>
                </div>
                <div className='header_sub'>
                    <Link to='/'>
                        <GoogleIcon
                            style={{ color: "red" }}
                            classNmae='header_sub_item'
                        ></GoogleIcon>
                    </Link>
                    <Link to='/search' style={{ color: "gray" }}>
                        <ListAltIcon classNmae='header_sub_item'></ListAltIcon>
                    </Link>
                    <Link to='/images'>
                        <ImageIcon className='header_sub_item'></ImageIcon>
                    </Link>
                    <Link to='/news'>
                        <NewspaperIcon className='header_sub_item'></NewspaperIcon>
                    </Link>
                    <SmartDisplayIcon className='header_sub_item'></SmartDisplayIcon>
                    <BookIcon className='header_sub_item'></BookIcon>
                    <FlightIcon className='header_sub_item'></FlightIcon>
                    <AccountBalanceIcon className='header_sub_item'></AccountBalanceIcon>
                </div>
            </header>
        </>
    );
};

export default SearchHeader;
