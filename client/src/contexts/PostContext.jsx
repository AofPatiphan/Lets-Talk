import axios from '../config/axios';
import { createContext, useState } from 'react';

const PostContext = createContext();

function PostContextProvider(props) {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');

    // Get data profile
    const fetchPost = async (username) => {
        const res = await axios.get(`/post/${username}`);
        setPost(res.data.posts);
    };

    const addPost = async ({ title, picture }) => {
        if (title) {
            const res = await axios.post('/post', {
                caption: title,
                pictureUrl: picture,
            });
            const nextPost = [res.data.post, ...post];
            setPost(nextPost);
        }
    };

    const updatePost = async (id, value) => {
        const idx = post.findIndex((item) => item.id === id);
        const newPost = [...post];
        const res = await axios.put(`/post/${id}`, { caption: value });
        newPost[idx] = res.data.post;
        setPost(newPost);
    };

    return (
        <PostContext.Provider
            value={{
                title,
                setTitle,
                fetchPost,
                addPost,
                post,
                picture,
                setPicture,
                updatePost,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
export { PostContext };
