

exports.ResSuccess = ({ res, data }) => res.status(200).json(data)
exports.ResErrorServer = (props, res) => res.status(500).json({ status: 500, message: props.message })