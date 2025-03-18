
import {coursesAndDurationArray} from "../data/courses.ts";
import Course from "./Course.tsx";


export const AllCourses = () => {
    return (
        <div>

            {
                coursesAndDurationArray.map((course, index) => {
                    return (
                        <div key={index}>
                            <Course item={course}/>

                        </div>
                    );
                })
            }

        </div>
    );
};

