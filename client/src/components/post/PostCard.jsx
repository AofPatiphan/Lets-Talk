import React from 'react';
import './postcard.css';

function PostCard({ item }) {
    console.log(item);
    return (
        <div className="postCard">
            <div className="postProfilePicture">
                <img src={item.User.profileUrl} alt="Profile Img" />
            </div>
            <div className="postcontainer">
                <div className="topPost">
                    <div className="postUsername">{item.User.username}</div>
                    <button className="btnPost btn">
                        <i className="bi bi-three-dots"></i>
                    </button>
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
    );
}

export default PostCard;
