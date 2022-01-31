import React from 'react';
import './profileheader.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function ProfileHeader({ person }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <div className="coverPicture">
                <img
                    className="coverImg"
                    src="https://www.teahub.io/photos/full/51-513680_facebook-cover-wallpaper..jpg"
                    alt="Cover Photo"
                />
            </div>
            <div className="profileHeader">
                <div className="profileDetail">
                    <div className="topProfileDetail">
                        <div className="profilePicture">
                            <img
                                className="profileImg"
                                src={person.profileUrl}
                                alt="Profile Pigture"
                            />
                        </div>
                        {user.username === person.username ? (
                            <div className="editProfile">
                                <button
                                    type="button"
                                    className="btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#EditProfileModal"
                                >
                                    <b>Edit Profile</b>
                                </button>
                                <button className="btn" onClick={logout}>
                                    <b>
                                        <i className="bi bi-box-arrow-right"></i>
                                    </b>
                                </button>
                            </div>
                        ) : (
                            <div className="editProfile">
                                <button className="btn">
                                    <b>Chat</b>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="profileDetailContent">
                        <div className="username">
                            <strong>{person.username}</strong>
                        </div>
                        <div className="aboutme">
                            <button className="d-flex">
                                <i className="bi bi-gender-ambiguous"></i>
                                <div>
                                    <b>{person.About?.gender}</b>
                                </div>
                            </button>
                            <button className="d-flex">
                                <div>
                                    <b>Age : {person.About?.age}</b>
                                </div>
                            </button>
                        </div>
                        <div className="caption">{person.About?.caption}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileHeader;
