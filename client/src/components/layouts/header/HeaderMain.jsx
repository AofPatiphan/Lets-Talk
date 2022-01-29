import React from 'react';
import './headermain.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function HeaderMain() {
    const { page } = useContext(AuthContext);

    return (
        <>
            <div className="ps-4 pe-5 pt-3 fixed-top d-flex justify-content-between header">
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
                                data-bs-target="#exampleModal"
                            >
                                <i className="bi bi-pencil-square"></i>
                            </button>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog ">
                    <div className="modal-content postForm">
                        <div className="modal-header ">
                            <h5
                                className="modal-title postTitle"
                                id="exampleModalLabel"
                            >
                                Create Post
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message-text"
                                        className="col-form-label postTitle"
                                    >
                                        Caption :
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn postBtn">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMain;
