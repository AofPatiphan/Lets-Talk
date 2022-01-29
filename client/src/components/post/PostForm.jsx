import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

function PostForm() {
    const { addPost, title, setTitle, picture, setPicture } =
        useContext(PostContext);

    const handleSubmitPost = (e) => {
        e.preventDefault();
        addPost({ title, picture });
    };
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content postForm">
                    <form onSubmit={handleSubmitPost}>
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
                        <div className="modal-body">
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
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></textarea>
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
                            <button className="btn postBtn">Submit Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
