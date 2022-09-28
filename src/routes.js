const router = require('express').Router()

const TaskController = require('./controllers/TaskController')

router.get('/task/all', TaskController.show)

router.post('/task/store', TaskController.store)

router.put('/task/edit/:id', TaskController.update)

router.delete('/task/remove/:id', TaskController.delete)

router.get('/task/:id', TaskController.index)

module.exports = router