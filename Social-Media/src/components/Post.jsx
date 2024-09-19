import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/psots-list-store";
const Post = ({post}) =>{

  
  const {deletePost}=  useContext(PostList);

    return(
      <div className="card post-card" style={{width: "30rem"}}>
        <div className="card-body">
            <h5 className="card-title">{post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                    <MdDelete/>
                </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag)=> <span className="badge text-bg-primary m-1" key={tag} >{tag}</span>)}
            <div className="alert alert-success mt-2"            role="alert">
            This post has been reacted by <b>{post.reactions.likes}</b> people
            </div>
        </div>
    </div>
    ) 
    
}

export default Post;