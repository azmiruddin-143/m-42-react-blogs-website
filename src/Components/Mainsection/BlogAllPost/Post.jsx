import { CiBookmark } from "react-icons/ci";

const Post = ({ blogtrransfer,cardadd,timegenarate }) => {
    const { hashtags, author, posted_date, reading_time, title,} = blogtrransfer;
    return (
        <div>
            <img src={blogtrransfer.cover} alt="" />
            <div className="flex gap-80">
                <div className="flex items-center gap-3">
                    <img className="w-[50px]" src={blogtrransfer.author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <h1>{posted_date}</h1>

                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <h1>{reading_time} mean read</h1>
                    <button onClick={()=>cardadd(blogtrransfer)} ><CiBookmark /></button>                  
                </div>
            </div>

            <div className="my-7"> 
                <h1 className="text-2xl">{title}</h1>
                <p>
                    {
                      hashtags?.map((has,idx) => <span className="pl-2" key={idx}><a href="">#{has}</a></span>)
                    }
                </p>
                <button onClick={()=> timegenarate(reading_time)} className="my-2 text-cyan-700  border-b border-red-400">Mark as read</button>

                
            </div>
        </div>
    );
};

export default Post;