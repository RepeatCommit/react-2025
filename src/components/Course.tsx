import {CourseModel} from "../models/CourseModel.ts";
import {FC} from "react";


type CourseProps = {
    item: CourseModel;

}


const Course:FC<CourseProps>  = ({item}) => {

    return (
        <div>
            <h2 className= "font-bold text-red-500 underline">{item.title}</h2>
            <p> {item.monthDuration} months</p>

        </div>
    );
};

export default Course;