import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDeteil = () => {
    const friend=useLoaderData()
    return (
        <div>
            <h1>Deteils about:{friend.name}</h1>
            <h2>call him/her: {friend.phone}</h2>
            <h3>Everything you need to know about the person</h3>
        </div>
    );
};

export default FriendDeteil;