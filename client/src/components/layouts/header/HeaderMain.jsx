import React from 'react';
import './headermain.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function HeaderMain() {
    const { page } = useContext(AuthContext);

    return (
        <>
            <div className="ps-4 pe-5 pt-3 fixed-top d-flex justify-content-between headermain">
                {page === 'Home' ? (
                    <>
                        <h5>
                            <b>Look Around</b>
                        </h5>
                        <h5>
                            <b>Filter</b>
                        </h5>
                    </>
                ) : page === 'Chat' ? (
                    <>
                        <h5>
                            <b>Chat</b>
                        </h5>
                        <h4>
                            <b>
                                <i className="bi bi-pencil-square"></i>
                            </b>
                        </h4>
                    </>
                ) : page === 'Profile' ? (
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
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default HeaderMain;
