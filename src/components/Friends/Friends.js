import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';



const Friends = () => {
    const friends=useLoaderData();
    return (
        <div >
            <h2>I have so many friends.YaY:{friends.length}</h2>
            <div className='friends'>
            {
                friends.map(friend=><Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
            </div>
           
        </div>
    );
};

export default Friends;