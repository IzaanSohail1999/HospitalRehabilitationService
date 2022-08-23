const request = require("supertest");
const index = require("../index");

// beforeAll(async () => {
//     const uri = "mongodb+srv://goodcore:password1999@hospitalrehabilitations.scu8t.mongodb.net/HospitalRehabilitationService";
//     const mongoose = require('mongoose');

//     await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
//     (err) => {
//         if (!err) {
//             console.log("Connected to MongoDb")
//         } else {
//             console.log("error")
//         }
//     });
// })

test("send Correct email and password to be verified", async () => {
  await request(index)
    .post("/login")
    .expect("Content-Type", /json/)
    .send({
      email: "izaansohail1999@gmail.com",
      password: "password"
    })
    .expect((response) => {
      expect(response.status).toBe(200)
      response.body.result.firstName = "Izaan";
      response.body.result.lastName = "Sohail";
      response.body.result.hospital = "All";
      response.body.result.departement = "All";
      response.body.result.role = "Super Admin";
    })
})

test("send Incorrect email and password to be verified", async () => {
  await request(index)
    .post("/login")
    .expect("Content-Type", /json/)
    .send({
      email: "wrongemail@gmail.com",
      password: "password"
    })
    .expect((response) => {
      expect(response.status).toBe(404)
      response.body.result = "user not found";
    })
})

test("send only email Not Password", async () => {
  await request(index)
    .post("/login")
    .expect("Content-Type", /json/)
    .send({
      email: "wrongemail@gmail.com"
    })
    .expect((response) => {
      expect(response.status).toBe(406)
      response.body.result = "Invalid Information";
    })
})

test("send email to be sent OTP to", async () => {
  await request(index)
    .post("/ForgetPassword")
    .expect("Content-Type", /json/)
    .send({
      email: "izaansohail1999@gmail.com"
    })
    .expect((response) => {
      expect(response.status).toBe(200)
      response.body.result = "Success";
    })
})

test("send empty parameters to recieve 406 status code", async () => {
  await request(index)
    .post("/ForgetPassword")
    .expect((response) => {
      expect(response.status).toBe(406)
      response.body.result = "Invalid Information";
    })
})

