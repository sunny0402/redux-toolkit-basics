## About

Redux Toolkit app set up.

Chapter 2 of the following tutorial:
React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial
https://www.youtube.com/watch?v=NqzdVN2tyvQ

## Notes

```
//createSilce automatically generates action creator function with the same name
//Immer.js inside createSlice allows us to directly mutate state
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //this is the action.payload. Think of it as any new post will have to be prepared with this data.
      prepare(title, content, userId) {
        //title, content, userId will be passed in from addPostForm
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    //another reducer for reactions to posts
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
```
