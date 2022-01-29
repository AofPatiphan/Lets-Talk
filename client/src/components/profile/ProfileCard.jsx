import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profilecard.css';
function ProfileCard({ item }) {
    const navigate = useNavigate();
    return (
        <div className="d-flex p-2 border-bottom border-warning">
            <div
                className="pe-4"
                onClick={() => navigate(`/profile/${item.username}`)}
            >
                <img
                    className="profileCardPicture"
                    src={item.profileUrl}
                    alt=""
                />
            </div>
            <div>
                <div className="name">
                    <div>
                        <b>{item.username}</b>
                    </div>
                    <div>2m | 2 minutes Ago</div>
                </div>
                <div>{item.About?.caption}</div>
            </div>
        </div>
    );
}

export default ProfileCard;