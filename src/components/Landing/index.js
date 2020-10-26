import React from 'react';

import './index.css';

export default function Landing(props) {
    const { user, show } = props;
    console.log(user, 'mark');
    return (
        <div className="page-container">
            {
                user ? (show ? (
                    <div className="card-container">
                        <div className="card-image">
                            <img src={user.avatar_url} alt="avatar" />
                        </div>
                        <div className="card-text">
                            <h4>Github User Name: {user.login}</h4>
                            <h5>{user.followers} followers</h5>
                        </div>
                    </div>
                ) : (
                        <h1>
                            User not found
                        </h1>
                    )
                ) : (
                        <h1>This is Home Page</h1>
                    )
            }
        </div>
    )
}