import { useReducer } from "react";
import { createContext } from "react";



export const PostList= createContext(  {
    postList: [],
    addPost:()=>{},
    addInitialPosts:()=>{},
    deletePost:()=>{},

});

const PostListReducer = (currPostList, action)=>{

    
    let newPostList = currPostList;
    if(action.type ==="DELETE_POST")
    {

        newPostList = currPostList.filter((post)=> post.id != action.payload.postId);
    }
    else if(action.type ==="ADD_POST")
    {
        newPostList = [action.payload,...currPostList];
    }
    else if(action.type ==="ADD_INITIAL_POSTS")
    {
        newPostList =action.payload.posts;  
    }
    return newPostList;
}

const PostListProvider = ({children})=>{


    const [postList, dispatchPostList] = useReducer(PostListReducer,[]);
 
    const addPost = (userId,postTitle,postBody,reactions,tags)=>{

      
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions:reactions,
                userID:userId,
                tags:tags,
            },
        })
        

    }

    const addInitialPosts = (posts)=>{

      
        dispatchPostList({
            type:"ADD_INITIAL_POSTS",
            payload:{
                posts
            },
        })
        

    }

    const deletePost = (postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId
            },
        })
    }


    return <PostList.Provider value={
        {
        postList ,
        addPost ,
        deletePost ,
        addInitialPosts
        }

    }> 
        {children}
    </PostList.Provider>
};


// const DEFAULT_POST_LIST=[
//     {
//         id: 1,
//         title: "Going to Mumbai",
//         body: "hi friends i am going to mumbai for my vacations , Hope you enjoy",
//         reactions:0,
//         userID:'user-9',
//         tags:['vacations','mumbai','enjoy'],
//     },
//     {
//         id: 2,
//         title: "pass ho bhai",
//         body: "4 sal ki masti ke bad ho gaye pass",
//         reactions:15,
//         userID:'user-12',
//         tags:['graduating','unbelievable'],
//     },
// ];

export default PostListProvider;