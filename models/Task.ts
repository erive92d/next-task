import mongoose, { models } from "mongoose";

const {Schema} = mongoose;

const taskSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: false,
        default: "Not started"
    }

})

const Task = models.Task || mongoose.model("Task", taskSchema)

export default Task
