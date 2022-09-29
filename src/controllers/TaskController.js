const Task = require('../models/task')

module.exports = {
    async index(req, res) {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            }
        })
        if (task) {
            res.json(task)
        } else {
            return res.status(404).json({
                'message': 'resource not found!'
            })
        }
    },

    async show(req, res) {
        const tasks = await Task.findAll()
        return res.json(tasks)
    },

    async store(req, res) {
        const { title, description } = req.body

        const task = await Task.findOne({
            where: { title: title }
        })

        if (!task) {
            const newTask = await Task.create({
                title: title,
                description: description
            })

            return res.status(201).json(newTask)
        } else {
            return res.json(task)
        }
    },

    async update(req, res) {
        const { description } = req.body
        const { id } = req.params
        
        const task = await Task.findOne({
            where: { id: id }
        })
        
        if (task) {
            if (description) {
                await Task.update({ description: description }, {
                    where: { id: id }
                })
                
                const taskUpdated = await Task.findOne({
                    where: { id: id }
                })

                return res.json(taskUpdated)
            } else {
                return res.json(task)
            }
        } else {
            return res.status(404).json({
                'message': 'resource not found!'
            })
        }
        return res.json(task)
    },

    async delete(req, res) {
        const result = await Task.destroy({
            where: {
                id: req.params.id
            }
        })

        if (result) {
            return res.json({
                'message': 'task deleted'
            })
        } else {
            return res.status(404).json({
                'message': 'task not found!'
            })
        }
    }
}