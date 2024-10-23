import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = ({cardadd,card,timegenarate}) => {

   const [blog,setblog] = useState([])

   useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(blogdata => setblog(blogdata))
   },[])

   
    return (
        <div>
             {
               blog.map(blogloop => <Post key={blogloop.id} timegenarate ={timegenarate} cardadd ={cardadd} card ={card}  blogtrransfer = {blogloop}></Post> )
             }
        </div>
    );
};

export default Posts;