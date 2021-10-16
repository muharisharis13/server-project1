const { Router } = require("express")
const { checkTokenAdm } = require("../../utl/token")
const { getallProduct } = require("../product/product.controller")
const { RegisterAdmin, LoginAdmin } = require("./admin.controller")
const router = new Router()


router.get("/product/getProduct", checkTokenAdm, getallProduct)
router.post("/login", LoginAdmin)
router.post("/register", RegisterAdmin)

exports.RouterAdmin = router