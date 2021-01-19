const axios = require('axios')
module.exports.all = async (req, res) => {
  const users = await axios({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
  }).then((r) => r.data)
  return res.json(users)
}

module.exports.findUser = async (req, res) => {
  const { id = 1 } = req.params
  const user = await axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  }).then((r) => r.data)
  return res.json(user)
}
