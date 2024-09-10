import { useContext } from "react";
import Post from "./Post";
import { PostList as PostLiastData } from "../store/psots-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList =()=>{

    const {postList,addInitialPosts}=useContext(PostLiastData);

    const hendalGetPostClick = ()=>{
        fetch('https://dummyjson.com/posts')
        .then((res)=> res.json())
        .then((data)=> {
            addInitialPosts(data.posts)
        });

    };

    return (
        <>
        {postList.length === 0 && <WelcomeMessage onGetPostClick={hendalGetPostClick} />}
        {postList.map((post)=> <Post key={post.id} post={post} />)}
        </>
    )
}

export default PostList;