const router = require('express').Router()

router.get('/task/all', (req, res) => {
    res.send(`all tasks`)
})

router.post('/task/store', (req, res) => {
    res.send('storing task...')
})

router.put('/task/edit/:id', (req, res) => {
    res.send(`editing task ${req.params.id}`)
})

router.delete('/task/remove/:id', (req, res) => {
    res.send(`removing task ${req.params.id}`)
})

router.get('/task/:id', (req, res) => {
    res.send(`task ${req.params.id}`)
})

module.exports = router