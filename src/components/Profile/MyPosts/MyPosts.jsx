import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const AddNewPostForm = (props) => {
    return (
        <form>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='MyPost' name='NewPostText' component='textarea'/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </form>
    )
};
const MyPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);


    const onAddPost = (formData) => {
        props.addPost(formData.NewPostText);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <MyPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;