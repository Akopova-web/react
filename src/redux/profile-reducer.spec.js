import profileReducer, { addPost, deletePost } from "./profile-reducer";
let state = {
    posts: [{
            id: 1,
            message: "hello",
            likesCount: 13
        },
        {
            id: 2,
            message: "How are you?",
            likesCount: 23
        },
        {
            id: 3,
            message: "Yo, mazafucka",
            likesCount: 13
        },
    ]
};
test('length of posts must be incredible', () => {
    let action = addPost("All is cool");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
  });

test('message of post must be the same', () => {
    let action = addPost("All is cool");
    let newState = profileReducer(state, action);
    expect(newState.posts[0].message).toBe("All is cool");
  });

test('length of posts must be incredible', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
  });

test('length of posts must not be incredible if id is incorrect', () => {
    let action = deletePost(100000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
  });