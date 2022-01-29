import axios from '../../config/axios';
import React, { useState, useEffect } from 'react';
import PostCard from '../../components/post/PostCard';
import ProfileHeader from '../../components/profile/ProfileHeader';
import { useParams } from 'react-router-dom';
import './profile.css';

function Profile() {
    const [person, setPerson] = useState({});
    const [post, setPost] = useState([]);
    const { username } = useParams();

    console.log(person);
    // Fetch User Data
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user/${username}`);
            setPerson(res.data.user);
        };

        fetchUser();
    }, [username]);

    //Fetch Post
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/post/${username}`);
            setPost(res.data.posts);
        };

        fetchPost();
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
