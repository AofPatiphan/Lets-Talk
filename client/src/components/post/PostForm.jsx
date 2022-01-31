import axios from '../../config/axios';
import React, { useContext } from 'react';
import './postform.css';
import { PostContext } from '../../contexts/PostContext';
import { AuthContext } from '../../contexts/AuthContext';

function PostForm() {
    const { addPost, title, setTitle, picture, setPicture } =
        useContext(PostContext);
    const { loading, setLoading } = useContext(AuthContext);

    const handleSubmitPost = (e) => {
        e.preventDefault();
        addPost({ title, picture });
        setTitle('');
        setPicture('');
    };

    const handleFileInputChange = async (e) => {
        setLoading(true);
        if (!e.target.value) return;

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onloadend = async () => {
            await uploadImage(reader.result);
        };
        e.target.value = '';
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', {
                data: base64EncodedImage,
            });
            setPicture(res.data.url);
            setLoading(false);
        } catch (err) {
            alert('File size too large.');
        }
    };
    return (
        <div
            className="modal fade"
            id="PostModal"
            tabIndex="-1"
            aria-labelledby="PostModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content postForm">
                    <form onSubmit={handleSubmitPost}>
                        <div className="modal-header ">
                            <h5
                                className="modal-title postTitle"
                                id="PostModalLabel"
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
                        <div className="modal-body">
                            {picture ? (
                                <div className="previewpostphoto">
                                    <img
                                        src={picture}
                                        alt=""
                                        className="previewpostphoto"
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="mb-2">
                                <label
                                    htmlFor="message-text"
                                    className="col-form-label postTitle"
                                >
                                    Caption :
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="formFile"
                                    className="form-label"
                                >
                                    Select your photo :
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                    onChange={handleFileInputChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {title || !loading ? (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                >
                                    Submit Post
                                </button>
                            ) : (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                    disabled
                                >
                                    Submit Post
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
