import { Schema, model } from "mongoose";

const CourseModel = new Schema({
    name: String,
    content:String,
    instructor:String,
    userid:String
    
});

const Course = model("Course", CourseModel);

export default Course;