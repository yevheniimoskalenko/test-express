const app = require('./src/app')
require('dotenv').config()
app.listen(process.env.port, () => console.log(`server is started port: ${process.env.port}`))
