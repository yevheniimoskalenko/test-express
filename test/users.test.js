const request = require('supertest')
const app = require('../src/app.js')

/*eslint no-undef: "off"*/

test('should be show all users', async () => {
  await request(app).get('/api/all').expect(200)
})

test('should be return info about user', async () => {
  await request(app).get('/api/findUser/10').expect(200)
})
