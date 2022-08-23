const request = require("supertest");
const index = require("../index");

// test("send Data for Super Admin", async () => {
//     await request(index)
//       .post("/user/saveSuperAdmin")
//       .expect("Content-Type", /json/)
//         .send({
//             firstName: "Aiman",
//             lastName: "Asif",
//             hospital: "All",
//             departement: "All",
//             email: "AimanAsif@gmail.com",
//             password: "password",
//             role: "Super Admin"
//         })
//         .expect((response) => {
//         expect(response.status).toBe(200)
//         response.body.result = "User Data Saved";
//       })
//   })

  test("send Data for that already exist in the Database", async () => {
    await request(index)
      .post("/user/saveSuperAdmin")
      .expect("Content-Type", /json/)
        .send({
            firstName: "Aiman",
            lastName: "Asif",
            hospital: "All",
            departement: "All",
            email: "AimanAsif@gmail.com",
            password: "password",
            role: "Super Admin"
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Already Exist";
      })
  })

  test("Send Empty Post Call", async () => {
    await request(index)
      .post("/user/saveSuperAdmin")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  // test("send Data for Hospital Admin", async () => {
  //   await request(index)
  //     .post("/user/saveUser")
  //     .expect("Content-Type", /json/)
  //       .send({
  //           firstName: "user",
  //           lastName: "2",
  //           hospital: "Ziauddin",
  //           departement: "Pharma",
  //           email: "user2@gmail.com",
  //           password: "password",
  //           role: "Hospital Admin"
  //       })
  //       .expect((response) => {
  //       expect(response.status).toBe(200)
  //       response.body.result = "User Data Saved";
  //     })
  // })

  test("send Data for that already exist in the Database", async () => {
    await request(index)
      .post("/user/saveUser")
      .expect("Content-Type", /json/)
        .send({
          firstName: "user",
          lastName: "2",
          hospital: "Ziauddin",
          departement: "Pharma",
          email: "user2@gmail.com",
          password: "password",
          role: "Hospital Admin"
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Already Exist";
      })
  })

  test("Send Empty Post Call", async () => {
    await request(index)
      .post("/user/saveUser")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  // test("send email to delete entry from the Database", async () => {
  //   await request(index)
  //     .delete(`/user/deleteUser?email=user2@gmail.com`)
  //       .expect((response) => {
  //       expect(response.status).toBe(200)
  //     })
  // })

  test("send email that doesnt exist in the Database", async () => {
    await request(index)
      .delete("/user/deleteUser?email=unknown@gmail.com")
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "Not Found";
      })
  })

  test("send empty body delete call", async () => {
    await request(index)
      .delete("/user/deleteUser")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  test("Update Already Inserted Data", async () => {
    await request(index)
      .put("/user/updateUserDetails")
      .expect("Content-Type", /json/)
      .send({
        firstName: "user",
        lastName: "1",
        hospital: "AKU",
        departement: "Pharma",
        email: "user1@gmail.com",
        password: "password",
        role: "Hospital Admin"
      })
        .expect((response) => {
        expect(response.status).toBe(200)
      })
  })

  test("send incorrect email to edit user details", async () => {
    await request(index)
      .put("/user/updateUserDetails")
      .expect("Content-Type", /json/)
      .send({
        firstName: "user",
        lastName: "1",
        hospital: "AKU",
        departement: "Pharma",
        email: "unknown@gmail.com",
        password: "password",
        role: "Hospital Admin"
      })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Doesnt Exist";
      })
  })

  test("send an empty call to update Data API", async () => {
    await request(index)
      .put("/user/updateUserDetails")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })
  
  test("Update User Password", async () => {
    await request(index)
      .put("/user/updatePassword")
      .expect("Content-Type", /json/)
      .send({
        email: "user1@gmail.com",
        password: "newpassword"
      })
        .expect((response) => {
        expect(response.status).toBe(200)
      })
  })

  test("send incorrect email to update password on", async () => {
    await request(index)
      .put("/user/updatePassword")
      .expect("Content-Type", /json/)
      .send({
        email: "unknown@gmail.com",
        password: "password",
      })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Doesnt Exist";
      })
  })

  test("send empty call to update password API", async () => {
    await request(index)
      .put("/user/updatePassword")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  test("Get User That has Particular attributes", async () => {
    await request(index)
      .get("/user/getParticularUser?email=user1@gmail.com&firstName=user&lastName=1&hospital=AKU&post=Hospital Admin")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.users[0].firstName = "user";
        response.body.users[0].lastName = "1";
        response.body.users[0].hospital = "AKU";
        response.body.users[0].departement = "Pharma";
        response.body.users[0].email = "user1@gmail.com";
        response.body.users[0].password = "newpassword";
        response.body.users[0].role = "Hospital Admin";
      })
  })

  test("send wrong data that produces no results", async () => {
    await request(index)
      .get("/user/getParticularUser?email=unknown@gmail.com&firstName=unknown&lastName=1&hospital=AKU&post=Hospital Admin")
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Doesnt Exist";
      })
  })

  test("Send empty post call to fetch particular user", async () => {
    await request(index)
      .get("/user/getParticularUser")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  test("Get One user based on his email", async () => {
    await request(index)
      .get("/user/getOneUser?email=user1@gmail.com")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.users[0].firstName = "user";
        response.body.users[0].lastName = "1";
        response.body.users[0].hospital = "AKU";
        response.body.users[0].departement = "Pharma";
        response.body.users[0].email = "user1@gmail.com";
        response.body.users[0].password = "newpassword";
        response.body.users[0].role = "Hospital Admin";
      })
  })

  test("try to fetch a user that doesnt exist based on email", async () => {
    await request(index)
      .get("/user/getOneUser?email=unknown@gmail.com")
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "User Doesnt Exist";
      })
  })

  test("send empty call to fetch a particlar user", async () => {
    await request(index)
      .get("/user/getOneUser")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
      })
  })

  test("Fetch All Users", async () => {
    await request(index)
      .get("/user/getUser")
        .expect((response) => {
        expect(response.status).toBe(200)
      })
  })
