const jest = require('jest')
const supertest = require('supertest')

const express = require('express');
const router = express.Router();
const paletteRouter = require('../src/server/routes/paletteRouter.js');
const authRouter = require('../src/server/routes/authRouter.js');
const userRouter = require('../src/server/routes/userRouter.js')


describe('Endpoint should be valid', () => {
    beforeEach(() => {
      router = new Router();
    });
  
      expect(router).toBeCalled();
    });

 describe('Post route should generate posts', () => {
  it('should make a new post', async()=>{
   const res = await request(app)
   .post('/')
   .expect(res.status).toEqual(200)
   .expect(res.body).toHaveProperty('post')
  })
        });