const { TestScheduler } = require('jest')
const request = require('supertest')
const { response } = require('../app')
const app = require('../app')
const { post } = require('../model/address')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const userModel = require('../model/userModel')
const userOneId = new mongoose.Types.ObjectId()
const userOne ={
        _id: userOneId,
        name :'mohit',
        email : 'xxxxx@hhd.com',
        password:'hgvhgs',
        contactNumber :'6435457876',
        role:'admin',
        tokens: [{
            token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
        }]
} 

beforeEach(async()=>{

    await userModel.deleteMany();
    await new userModel(userOne).save();  

})

test("for add user",async()=>{

   const response = await request(app).post('/user/addUser').send({
    _id: userOneId,
        name :'mohit',
        email : 'mohui@hhd.com',
        password:'hgvhgs',
        contactNumber :6435457876,
        role:'admin',
        tokens: [{
            token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
        }]

    }).expect(201)
    
   
})

test("for login user",async()=>{
    var response= await request(app).post('/user/login').send({
        email : userOne.email,
    password : userOne.password
    }).expect(200)
    const user = await userModel.findById(userOneId)
    
    
    
})

test("should not login nonexistent user",async()=>{
    await request(app).post('/user/login').send({
        email : userOne.email,
    password : "snbjh"
    }).expect(400)
})