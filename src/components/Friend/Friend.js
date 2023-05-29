import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {id,name,email,phone,username}=friend;
    return (
        <div className='friend'>
         <h3>name:{name}</h3> 
         <p>username:<Link to={`/friend/${id}`}>{username}</Link></p>
         <p>email:{email}</p>  
         <p>phone:{phone}</p>
        </div>
    );
};

export default Friend;