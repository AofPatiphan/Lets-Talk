import React, { useState } from 'react';
import './headermain.css';
import { useLocation } from 'react-router-dom';

function HeaderMain() {
    const location = useLocation();

    return (
        <>
            <div className="ps-4 pe-4 pt-3 fixed-top d-flex justify-content-between headermain">
                {location.pathname === '/' ? (
                    <>
                        <h5>
                            <b>Look Around</b>
                        </h5>
                        <h5>
                            <b>Filter</b>
                        </h5>
                    </>
                ) : location.pathname === '/messenger' ? (
                    <>
                        <h5>
                            <b>Chat</b>
                        </h5>
                    </>
                ) : location.pathname.includes('profile') ? (
                    <>
                        <h5>
                            <b>Profile</b>
                        </h5>
                        <div>
                            <button
                                type="button"
                                className="btn addPostBtn"
                                data-bs-toggle="modal"
                                data-bs-target="#PostModal"
                            >
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>
                    </>
                ) : location.pathname.includes('messenger/') ? (
                    <h5>
                        <b>Chat</b>
                    </h5>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default HeaderMain;
