import React, { useEffect, useState } from 'react';
import './Posts.css'
import Post from './Post/Post';

const Posts = () => {
    const [userPosts, setUserPost]=useState([]);
    const [isLoading,SetIsLoading]=useState(false);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setUserPost(data))
    },[])
    return (
        <div className='Posts-container'>
            <h1>neews feed</h1>
            {
                userPosts.map(post=><Post
                post={post}
                key={post.id}
                ></Post>)
            }
        </div>
    );
};

export default Posts;