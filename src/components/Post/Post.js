import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{id,title,body}=post;
    const navigate=useNavigate();
    const btnclk=()=>{
          navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
           <Link to={`/post/${id}`} >
           <button>Show deteils</button>
           <Link to={`/post/${id}`}>visit here</Link>
           </Link>
           <button onClick={btnclk}>show more deteils</button>
        </div>
    );
};

export default Post;