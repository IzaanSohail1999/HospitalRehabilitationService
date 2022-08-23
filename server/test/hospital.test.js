const request = require("supertest");
const index = require("../index");

// test("send Data to save Hospital", async () => {
//     await request(index)
//       .post("/hospital/saveHospital")
//       .expect("Content-Type", /json/)
//         .send({
//             "name": "Imam Clinic",
//             "address": "Fivestar",
//             "email": "imam@gmail.com",
//             "phone": "03322400629", 
//             "postCode": "01276 604 606",
//             "website": "https://imam.com"
//         })
//         .expect((response) => {
//         expect(response.status).toBe(200)
//         response.body.result = "Hospital Data Saved";
//       })
//   })

test("Try to save an already saved hospital", async () => {
await request(index)
    .post("/hospital/saveHospital")
    .expect("Content-Type", /json/)
    .send({
        "name": "Imam Clinic",
        "address": "Fivestar",
        "email": "imam@gmail.com",
        "phone": "03322400629", 
        "postCode": "01276 604 606",
        "website": "https://imam.com"
    })
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "Hospital Already Exist";
    })
})

test("Try to send an empty Post call", async () => {
await request(index)
    .post("/hospital/saveHospital")
    .expect((response) => {
    expect(response.status).toBe(406)
    response.body.result = "Invalid Information";
    })
})

test("Get all hospitals", async () => {
await request(index)
    .get("/hospital/getHospital")
    .expect((response) => {
    expect(response.status).toBe(200)
    })
})

// test("Get all hospitals when no hospital is available", async () => {
// await request(index)
//     .get("/hospital/getHospital")
//     .expect((response) => {
//     expect(response.status).toBe(404)
//     response.body.result = "Hospital Not Found";
//     })
// })

// test("send email to delete entry from the Database", async () => {
// await request(index)
//     .delete(`/hospital/deleteHospital?email=testing@gmail.com`)
//     .expect((response) => {
//     expect(response.status).toBe(200)
//     })
// })

test("send email to delete entry from the Database that doesnt exist", async () => {
await request(index)
    .delete(`/hospital/deleteHospital?email=testing@gmail.com`)
    .expect((response) => {
    expect(response.status).toBe(404)
    response.body.result = "Not Found";
    })
})

test("Send an empty delete call", async () => {
    await request(index)
        .delete(`/hospital/deleteHospital`)
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
    })

test("Update Already Inserted Hospital Data", async () => {
    await request(index)
        .put("/hospital/updateHospitalDetails")
        .expect("Content-Type", /json/)
        .send({
        name: "Ziauddin",
        address: "Nazimabad",
        email: "Ziauddin@gmail.com",
        phone: "03026662596",
        postCode: "01276 604 606",
        website: "https://Ziauddin.com"
        })
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.result = "Hospital Data Updated";
        })
    })

test("Try to Update a hospital that doesnt exist", async () => {
    await request(index)
        .put("/hospital/updateHospitalDetails")
        .expect("Content-Type", /json/)
        .send({
        name: "Ziauddin",
        address: "Nazimabad",
        email: "unknown@gmail.com",
        phone: "03026662596",
        postCode: "01276 604 606",
        website: "https://Ziauddin.com"
        })
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "Not Found";
        })
    })

test("Send an empty put call to update hospital data", async () => {
    await request(index)
        .put("/hospital/updateHospitalDetails")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
    })

test("Get Particular Hospital ", async () => {
    await request(index)
        .get("/hospital/getParticularHospital?name=Ziauddin&address=Nazimabad&email=Ziauddin@gmail.com&phone=03026662596&postCode=01276 604 606&website=https://Ziauddin.com")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.hospitals[0].name = "Ziauddin";
        response.body.hospitals[0].address = "KDA";
        response.body.hospitals[0].email = "Ziauddin@gmail.com";
        response.body.hospitals[0].phone = "03322400629";
        response.body.hospitals[0].postcode = "01276 604 606";
        response.body.hospitals[0].website = "KDA";
        })
    })

test("Get a Particular Hospital that doesnt exist", async () => {
    await request(index)
        .get("/hospital/getParticularHospital?name=Ziauddin&address=Nazimabad&email=unknown@gmail.com&phone=03322400629&postCode=01276 604 606&website=https://Ziauddin.com")
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "Not Found";
        })
    })

test("send empty get call to fetch particular data", async () => {
    await request(index)
        .get("/hospital/getParticularHospital")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
    })

test("Get One Hospital Based on Email", async () => {
    await request(index)
        .get("/hospital/getOneHospital?email=Ziauddin@gmail.com")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.hospitals[0].name = "Ziauddin";
        response.body.hospitals[0].address = "Nazimabad";
        response.body.hospitals[0].email = "Ziauddin@gmail.com";
        response.body.hospitals[0].phone = "03026662596";
        response.body.hospitals[0].postcode = "01276 604 606";
        response.body.hospitals[0].website = "03026662596";
        })
    })

test("Get One Hospital Based on Email that doesnt exist", async () => {
    await request(index)
        .get("/hospital/getOneHospital?email=unknown@gmail.com")
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "Not Found";
        })
    })

test("Get One Hospital Based on empty Email", async () => {
    await request(index)
        .get("/hospital/getOneHospital")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
    })