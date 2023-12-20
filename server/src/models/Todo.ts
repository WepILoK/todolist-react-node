import mongoose from "mongoose";

export interface ITodoSchema extends mongoose.Document {
    title: string
    isDone: boolean
}

const TodoSchema = new mongoose.Schema<ITodoSchema>({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

export default mongoose.model("Todo", TodoSchema)