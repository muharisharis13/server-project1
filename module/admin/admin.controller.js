const { ResSuccess, ResErrorServer } = require("../../utl/response")
const { adminModel } = require("./admin.model")
const crypto = require("crypto")
const { createTokenAdm } = require("../../utl/token")


exports.LoginAdmin = async (req, res) => {
  const { phone_number, password } = req.body
  try {

    await adminModel.findOne({ phone_number: phone_number, password: crypto.createHash('md5').update(password).digest('hex') })
      .then(result => {

        if (result !== null) {
          const data = {
            _id: result._id,
            full_name: result.full_name,
            phone_number: result.phone_number,
            role: result.role
          }
          ResSuccess({ res: res, data: { status: 200, success: data, token: createTokenAdm({ payload: { data: data } }) } })

        }
        else {
          ResSuccess({ res: res, data: { message: "password wrong" } })

        }


      })

  } catch (err) {
    ResErrorServer(err, res)
  }
}

exports.RegisterAdmin = async (req, res) => {
  const { full_name, password, phone_number, role } = req.body
  try {

    const post = new adminModel({
      full_name: full_name,
      phone_number: phone_number,
      password: crypto.createHash('md5').update(password).digest('hex'),
      role: role
    })

    await post.save()
      .then(result => {
        ResSuccess({ res: res, data: { status: 200, success: result } })
      })



  } catch (err) {
    ResErrorServer(err, res)
  }
}