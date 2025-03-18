import {coursesArray} from "../data/coursesArray.ts";
import Course from "./Course.tsx";

const Courses = () => {
    return (
        <div>
            <section >
                {
                    coursesArray.map((course, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <Course item={course} />
                                </div>
                                <ul className="space-y-3">
                                   <h2 className="font-bold text-black text-2xl">Modules:</h2>
                                    {
                                        course.modules.map((module, index) => {
                                            return (
                                                <li className= "flex items-center justify-center bg-gray-200 text-black font-bold text-xl p-4 rounded-lg shadow-md" key={index}>{module}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
};

export default Courses;