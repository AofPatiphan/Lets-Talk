import axios from '../../config/axios';
import React, { useState, useEffect, useContext } from 'react';
import PostCard from '../../components/post/PostCard';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useParams } from 'react-router-dom';
import './profile.css';
import { PostContext } from '../../contexts/PostContext';

function Profile() {
    const { fetchPost, post } = useContext(PostContext);
    const [person, setPerson] = useState({});
    const { username } = useParams();

    // Fetch User Data
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user/${username}`);
            setPerson(res.data.user);
        };

        fetchUser(username);
    }, [username]);

    //Fetch Post
    useEffect(() => {
        fetchPost(username);
    }, [username]);

    if (!person || !post) {
        return <></>;
    }

    return (
        <div className="profile">
            <ProfileHeader person={person} />
            {post.map((item) => {
                return <PostCard item={item} key={item.id} />;
            })}
        </div>
    );
}

export default Profile;
