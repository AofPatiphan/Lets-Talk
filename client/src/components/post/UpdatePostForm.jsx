import React, { useContext, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';

function UpdatePostForm({ item }) {
    const { updatePost } = useContext(PostContext);
    const [editText, setEditText] = useState(item.caption);
    const handleSubmitEditPost = (e) => {
        e.preventDefault();
        updatePost(item.id, editText);
    };

    return (
        <div
            className="modal fade"
            id={`EditPostModal${item.id}`}
            tabIndex="-1"
            aria-labelledby="EditPostModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content postForm">
                    <form onSubmit={handleSubmitEditPost}>
                        <div className="modal-header ">
                            <h5
                                className="modal-title postTitle"
                                id="EditPostModalLabel"
                            >
                                Edit Post
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
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
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
                            {editText ? (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                >
                                    Submit Edit Post
                                </button>
                            ) : (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                    disabled
                                >
                                    Submit Edit Post
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdatePostForm;
