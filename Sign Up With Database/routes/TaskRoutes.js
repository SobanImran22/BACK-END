const express = require('express');
const {signupuser ,getAllUsers}  = require ('../controllers/taskcontrollers')


const router = express.Router();

router.post('/signup', signupuser); 
router.get('/allusers', getAllUsers);

module.exports=router