import { useContext, useRef } from "react";
import { PostList } from "../store/psots-list-store";

const CreatePost = ({onSetSelectedTab}) =>{

   const {addPost} = useContext(PostList);

    const userIdElement= useRef();
    const postTitleElement= useRef();
    const postBodyElement= useRef();
    const reactionsElement= useRef();
    const tagsElement= useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        addPost(userId,postTitle,postBody,reactions,tags); 
        onSetSelectedTab("Home");
    }

    return(
    <form onSubmit={handleSubmit} className="create-post">

    <div className="form-group mt-3">
        <label htmlfor="tital">Post Title</label>
        <input ref={postTitleElement} type="text" className="form-control" id="tital"  placeholder="Enter Title"/>
    </div>
        
    <div className="form-group mt-3">
        <label htmlfor="tital">Post Content</label>
        <textarea ref={postBodyElement} rows="4" type="text" className="form-control" id="body"  placeholder="Tell us more about it"/>
    </div>

    <div className="form-group mt-3">
        <label htmlfor="tital">Enter your userId here</label>
        <input ref={userIdElement} type="text" className="form-control" id="userId"  placeholder="Enter your userId"/>
    </div>

    <div className="form-group mt-3">
        <label htmlfor="tital">Enter Total Reactions</label>
        <input ref={reactionsElement} type="text" className="form-control" id="reactions"  placeholder="How many people reacted to this post"/>
    </div>

    <div className="form-group mt-3">
        <label htmlfor="tital">Enter Tags</label>
        <textarea ref={tagsElement} type="text" className="form-control" id="tags"  placeholder="Please enter tags using space"/>
    </div>
    
    <button type="submit" className="btn btn-primary mt-3">Post</button>
    

    
    </form>
    )
}

export default CreatePost;