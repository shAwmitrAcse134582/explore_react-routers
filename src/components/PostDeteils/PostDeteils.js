import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDeteils = () => {
    const post=useLoaderData();
    const {id,title,body,userId}=post;
    const navigate=useNavigate();
    const handleclk=()=>{
        navigate(`/friend/${userId}`);
    }
    return (
        <div>
            <h3>Deteils about post: {id}</h3>
            <p>title:{title}</p>
            <p>body:{body}</p>
            <button onClick={handleclk}>Get the author</button>

            
        </div>
    );
};

export default PostDeteils;