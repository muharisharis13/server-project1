const jwt = require("jsonwebtoken")
const jwt_decode = require("jwt-decode")
const status = require("http-status")


exports.createTokenAdm = function ({ payload }) {
  return jwt.sign(payload, process.env.KEY_TOKEN)
}

exports.checkTokenAdm = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.KEY_TOKEN);
    req.userData = decoded;
    next();

  } catch (err) {
    return res.status(status.BAD_REQUEST).json({
      status: status.BAD_REQUEST,
      message: 'Auth Failed'
    })
  }
}

exports.getID = function getId(req) {
  return jwt_decode(req.headers.authorization.split(" ")[1]).data._id
}
