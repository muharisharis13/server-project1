const { productModels } = require("./product.models")

exports.getallProduct = async (req, res) => {
  try {

    const getProduct = await productModels.find()

    res.status(200).json({
      status: 200,
      success: getProduct
    })

  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message
    })
  }
}