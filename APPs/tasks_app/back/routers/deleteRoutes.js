const router = require('express').Router();
const { deleteTask } = require('../controllers/deleteTask');

// :userId는 정해지지 않은 문자열이며 params로 받는다.
router.delete('/delete_task/:itemId', deleteTask);

module.exports = router;
