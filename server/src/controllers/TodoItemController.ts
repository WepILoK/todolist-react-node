import express from "express";
import TodoModel from "../models/Todo";
import handleErrors from "../utils/handleErrors";

export const TodoController = {
    create: async (req: any, res: express.Response) => {
        try {

            const doc = new TodoModel({
                title: req.body.title,
            })

            const todo: any = await doc.save()

            res.status(200).json({
                status: "success",
                message: "todo.create.success",
                data: todo,
            })

        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "todo.create.failed",
            })
        }
    },
    getAll: async (req: express.Request, res: express.Response) => {
        try {

            const todo: any = await TodoModel.find({isDone: false}).sort({createdAt: -1})
                .exec()

            res.status(200).json({
                status: "success",
                message: "todo.getAll.success",
                data: todo,
            })

        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "todo.getAll.failed",
            })
        }
    },
    update: async (req: express.Request, res: express.Response) => {
        try {

            const todo: any = await TodoModel.findOneAndUpdate(
                {
                    _id: req.params.id,
                },
                {
                    title: req.body.title,
                    isDone: req.body.isDone
                },
                {
                    new: true
                }
            )
                .exec()
            if (!todo) {
                handleErrors.badRequest(res)
                return
            }

            res.status(200).json({
                status: "success",
                message: "todo.update.success",
                data: todo
            })

        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "todo.update.failed",
            })
        }
    },
    remove: async (req: express.Request, res: express.Response) => {
        try {

            const todo: any = await TodoModel.findOneAndDelete(
                {
                    _id: req.params.id,
                }
            )

            if (!todo) {
                handleErrors.badRequest(res)
                return
            }

            res.status(200).json({
                status: "success",
                message: "todo.remove.success",
            })

        } catch (err) {
            res.status(500).json({
                status: "error",
                message: "todo.remove.failed",
            })
        }
    },
}