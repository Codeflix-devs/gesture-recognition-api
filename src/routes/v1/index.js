const express = require('express')
const { gestureController } = require('../../controllers')

const router = express.Router()

router.post("/create", gestureController.create)
router.get("/", gestureController.getList)

module.exports = router