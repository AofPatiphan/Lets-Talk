import React from 'react';
import './conversation.css';

function Conversation() {
    return (
        <div className="d-flex p-2 border-bottom border-warning">
            <div className="pe-4">
                <img
                    className="profileCardPicture"
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1643169406/tutor/c1fv0htugi9ssu8clgry.jpg"
                    alt=""
                />
            </div>
            <div className="">
                <div className="name">
                    <div>
                        <b>Mamuang</b>
                    </div>
                    <div>2 min</div>
                </div>
                <div>Hello, my name is mamuang</div>
            </div>
        </div>
    );
}

export default Conversation;
