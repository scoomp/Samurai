import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (<div>
        MyPosts
        <div>
            <textarea></textarea>
            <button>Add Posts</button>
        </div>

        <div className={s.posts}>
            <Post />
            <Post/>
        </div>
    </div>)
}

export default MyPosts;