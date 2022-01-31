import React from 'react';
import './headerpublic.css';
import { useNavigate } from 'react-router-dom';

function HeaderPublic({ publicPage, setPublicPage }) {
    const navigate = useNavigate();

    const handleClickChangePage = (e) => {
        if (publicPage === 'login') {
            setPublicPage('register');
            navigate('/register');
        }
        if (publicPage === 'register') {
            setPublicPage('login');
            navigate('/');
        }
    };
    return (
        <div className="ps-4 pe-5 pt-3 fixed-top d-flex justify-content-between headerpublic">
            <div className="mt-2 " onClick={handleClickChangePage}>
                {`${publicPage === 'login' ? `Register` : `Sign in`}`}
            </div>
            <h1 className="pe-2 ">{`${
                publicPage === 'login' ? `Sign in` : `Create Account`
            }`}</h1>
            <h1>&nbsp;</h1>
        </div>
    );
}

export default HeaderPublic;
