const { Router } = require("express")
const { RegisterAdmin, LoginAdmin } = require("./admin.controller")
const router = new Router()

router.post("/login", LoginAdmin)
router.post("/register", RegisterAdmin)

exports.RouterAdmin = router