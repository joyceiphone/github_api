import React from 'react';

import './index.css';

export default function Following(props) {
    const { followers, user, handleShowMore, show } = props;
    return (
        <div className="page-container">
            {
                user ? (
                    show ? (
                        followers.length ? (
                            <div className="card-container followers">
                                <div className="followers_header">
                                    <h4 onClick={handleShowMore}>Show More</h4>
                                </div>
                                {
                                    followers.map((follower, i) => (
                                        <div key={i} className="row">
                                            <h4>{follower.login}</h4>
                                            <img src={follower.avatar_url} alt="avtar" />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                                <div className="card-container followers">
                                    <div className="followers_header">
                                        <h4>0 Followers</h4>
                                    </div>
                                </div>
                            )) : (
                            <h1>User not found</h1>
                        )
                ) : (
                        <h1>Following Page</h1>
                    )
            }
        </div>
    )
}