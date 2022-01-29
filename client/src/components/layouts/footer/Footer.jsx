import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import './footer.css';

function Footer() {
    const { user, setPage } = useContext(AuthContext);

    return (
        <>
            <div className="footer">
                {/* <div> */}
                <Link
                    to={'/'}
                    className="footerIcon"
                    onClick={() => setPage('Home')}
                >
                    <i className="bi bi-house"></i>
                </Link>
                {/* </div> */}
                <Link
                    to={'/'}
                    className="footerIcon"
                    onClick={() => setPage('Search')}
                >
                    <i className="bi bi-search"></i>
                </Link>
                <Link
                    to={'messenger'}
                    className="footerIcon"
                    onClick={() => setPage('Chat')}
                >
                    <i className="bi bi-chat"></i>
                </Link>
                <Link
                    to={`/profile/${user.username}`}
                    className="footerIcon"
                    onClick={() => setPage('Profile')}
                >
                    <i className="bi bi-person"></i>
                </Link>
            </div>
        </>
    );
}

export default Footer;
