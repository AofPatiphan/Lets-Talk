import axios from '../config/axios';
import { createContext, useState } from 'react';

const PostContext = createContext();

function PostContextProvider(props) {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');

    // Get data profile
    const fetchPost = async (username) => {
        const res = await axios.get(`/post/${username}`);
        setPost(res.data.posts);
    };

    const addPost = async ({ title, picture }) => {
        const res = await axios.post('/post', {
            caption: title,
            pictureUrl: picture,
        });
        const nextPost = [res.data.post, ...post];
        setPost(nextPost);
    };

    return (
        <PostContext.Provider
            value={{ title, setTitle, fetchPost, addPost, post }}
        >
            {props.children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
export { PostContext };
