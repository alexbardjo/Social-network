import {addPostActionCreator, deletePost, profileReducer} from "./Profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: `It\'s my first post`, likesCount: 13}
    ]
};

test('length of posts should be incremented', () => {
    // 1. start data
    let action = addPostActionCreator('it-kamasutra.com');


    // 2. action
    let newState = profileReducer(state, action);
    // 3. expactation
    expect(newState.posts[2].message).toBe('it-kamasutra.com')
});

test('message of new post should be correct', () => {
    // 1. start data
    let action = addPostActionCreator('it-kamasutra.com');

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expactation
    expect(newState.posts.length).toBe(3)
});


test('after deleting length of messages should be decrement', () => {
    // 1. start data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expactation
    expect(newState.posts.length).toBe(1)
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. start data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expactation
    expect(newState.posts.length).toBe(2)
});
