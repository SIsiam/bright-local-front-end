import React from 'react';
import Link from "next/link";

const Trial = () => {
    return (
        <div className="trial-container">
            <div className="trial">
                <h1>Try BrightLocal free for 14 days</h1>
                <p>All features · Unlimited access · No card required</p>
            </div>
            <div className="trial-link">
                <Link href='/'>
                    <a className="trial-button">Start your trial</a>
                </Link>
            </div>
        </div>
    );
};

export default Trial;