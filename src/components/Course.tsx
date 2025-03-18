import {ICourse} from "../models/ICourse.ts";
import {FC} from "react";


type ICourseProps = {
    item: ICourse;
}
const Course:FC<ICourseProps> = ({item}) => {
    return (
        <div  className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
             <h2 className= "font-bold text-blue-500 text-3xl font-roboto">{item.title}</h2>
             <p className="font-bold text-black text-2xl">{item.monthDuration}</p>
             <p className="font-bold text-black">{item.hourDuration}</p>



        </div>
    );
};

export default Course;