const router = require('express').Router()
const userController= require('../controllers/userController')

router.get('/edit/:id', userController.editUser)
router.post('/list', userController.listUser)
router.post('/create', userController.createUser)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

module.exports = router