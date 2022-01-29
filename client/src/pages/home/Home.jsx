import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import ProfileCard from '../../components/profilecard/ProfileCard';
import { AuthContext } from '../../contexts/AuthContext';
import './home.css';

function Home() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchAllUser = async (id) => {
            const res = await axios.get(`/user/all/${id}`);
            setUserData(res.data.users);
        };
        fetchAllUser(user.id);
    }, []);

    return (
        <div className="homepage">
            {userData.map((item) => {
                return <ProfileCard item={item} key={item.id} />;
            })}
        </div>
    );
}

export default Home;
