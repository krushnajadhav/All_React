import { useReducer } from "react";
import { createContext } from "react";


const DEFULT_CONTEXT=
    {
        postList: [],
        addPost:()=>{},
        deletePost:()=>{},
    };


const PostList= createContext(DEFULT_CONTEXT);

const PostListReducer = (currPostLiast, action)=>{
    return currPostLiast;
}

const PostListProvider = ({children})=>{


    const [postList, dispatchPostList] = useReducer(PostListReducer,{postList:[],addPost,deletePost});

    const addPost = (post)=>{

    }
    const deletePost = (post)=>{
        
    }


    return <PostList.Provider value={
        {
        postList ,
        addPost ,
        deletePost ,
        }

    }> 
        {children}
    </PostList.Provider>
};

export default PostListProvider;