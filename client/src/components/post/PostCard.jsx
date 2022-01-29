import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './postcard.css';
import UpdatePostForm from './UpdatePostForm';

function PostCard({ item }) {
    const { user } = useContext(AuthContext);
    const { username } = useParams();

    return (
        <>
            <div className="postCard">
                <div className="postProfilePicture">
                    <img src={item.User.profileUrl} alt="Profile Img" />
                </div>
                <div className="postcontainer">
                    <div className="topPost">
                        <div className="postUsername">{item.User.username}</div>
                        {user.username === username ? (
                            <div className="dropdown">
                                <button
                                    className="btn "
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-three-dots"></i>
                                </button>

                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <button
                                            className="btnPost btn dropdown-item"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#EditPostModal${item.id}`}
                                        >
                                            Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button className="btnPost btn dropdown-item">
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="postContent">{item.caption}</div>
                    <div className="postButtom ">
                        <button className="btn btnPost">
                            <i className="bi bi-heart"></i>
                        </button>
                        <div className="countLike btnPost">
                            {item.Likes.length} Likes
                        </div>
                    </div>
                </div>
            </div>
            <UpdatePostForm item={item} />
        </>
    );
}

export default PostCard;
