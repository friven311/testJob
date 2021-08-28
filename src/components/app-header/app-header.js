import React from 'react';
import './index.scss';


const AppHeader = ({allPosts}) => {
    return (
        <div className="header">
            <h1>Victor Shalamov</h1>
    <h2>{allPosts} записей</h2>
        </div>
    )
}

export default AppHeader;