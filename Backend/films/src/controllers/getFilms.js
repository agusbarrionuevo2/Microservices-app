
const { response } = require("../utils")
const axios = require('axios')
module.exports = async (req, res) => {
	const films = await axios.get("http://localhost:8004/Film")
	response(res, 200, films.data)
}