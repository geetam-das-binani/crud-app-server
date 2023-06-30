import express from 'express'
import { addUser,getUsersData ,getUser,editUser,deleteUser} from '../connections/addUser.mjs'
const router=express.Router()
router.post('/add',addUser)
router.get('/all',getUsersData)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)


export default router 