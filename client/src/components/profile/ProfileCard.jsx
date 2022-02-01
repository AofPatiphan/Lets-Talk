import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './profilecard.css';
import { getDistance, getPreciseDistance } from 'geolib';
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';
import timeSince from '../../services/timeSince';

function ProfileCard({ item }) {
    const { user } = useContext(AuthContext);
    const [myUserData, serMyUserData] = useState(null);
    const [otherUserData, serOtherUserData] = useState(null);
    const [distance, setDistance] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    // location
    useEffect(() => {
        const time = setInterval(() => {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                try {
                    setRefresh((prev) => !prev);
                    if (pos.coords.latitude || pos.coords.longitude) {
                        await axios.put(`/about/location/${user.id}`, {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        });
                    }
                } catch (err) {
                    console.log(err.message);
                }
            });
        }, 5000);
        return () => {
            clearInterval(time);
        };
    }, []);

    const fetchMyData = async () => {
        try {
            const res = await axios.get(`/user/me/${user.id}`);
            serMyUserData(res.data.user);
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchOtherUserData = async () => {
        try {
            const res = await axios.get(`/user/me/${item.id}`);
            serOtherUserData(res.data.user);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchMyData();
        fetchOtherUserData();
        calculatePreciseDistance();
    }, [refresh]);

    // calc distance
    function calculatePreciseDistance() {
        if (!myUserData || !otherUserData || !myUserData.About.latitude) {
            return;
        }
        const pdis = getPreciseDistance(
            {
                latitude: myUserData.About.latitude,
                longitude: myUserData.About.longitude,
            },
            {
                latitude: otherUserData.About.latitude,
                longitude: otherUserData.About.longitude,
            }
        );
        setDistance(pdis);
    }

    if (!myUserData || !otherUserData) {
        return <></>;
    }

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
            <div className="profileContent">
                <div className="name">
                    <div className="detail1">
                        <b>{item.username}</b>
                    </div>
                    <div className="detail2">
                        {distance} m |{' '}
                        {timeSince(otherUserData.About.updatedAt)} ago
                    </div>
                </div>
                <div>{item.About?.caption}</div>
            </div>
        </div>
    );
}

export default ProfileCard;
