import Mark from "../AllHistory/Mark";
import Timespend from "../AllHistory/Timespend";
import Posts from "./Posts";


const Blogs = ({cardadd,card,timegenarate,redingtime,carddilet}) => {
    return (
        <div className="grid grid-cols-3 mx-24">
            <div className=" col-span-2">
                <h1 className="text-white">dsvdfv</h1>
                <Posts cardadd = {cardadd} card ={card} timegenarate ={timegenarate}></Posts>
            </div>
            <div>
                 <Timespend redingtime ={redingtime}></Timespend>
                 <Mark card ={card} carddilet ={carddilet}></Mark>
                 
            </div>
        </div>
    );
};

export default Blogs;