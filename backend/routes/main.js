const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/goals', mainController.getGoals)

router.put("/updateGoal/:id", mainController.updateGoal);

router.post("/createGoal", mainController.createGoal);

router.delete("/deleteGoal/:id", mainController.deleteGoal);

module.exports = router;
