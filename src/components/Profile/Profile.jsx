import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    let {posts} = props;

    return ( <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
    </div>
    );
};

export default Profile;