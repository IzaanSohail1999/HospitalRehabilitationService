const request = require("supertest");
const index = require("../index");

// test("Save Service", async () => {
//     await request(index)
//       .post("/service/saveService")
//       .expect("Content-Type", /json/)
//       .send({
//             serviceID : "IOP1",
//             serviceName : "Inpatient Orthopaedic Physiotherapy",
//             Category : "Adult",
//       })
//       .expect((response) => {
//         expect(response.status).toBe(200)
//         response.body.result = "Service Data Saved";
//       })
// })

test("Send an already saved data", async () => {
await request(index)
    .post("/service/saveService")
    .expect("Content-Type", /json/)
    .send({
        serviceID : "IOP1",
        serviceName : "Inpatient Orthopaedic Physiotherapy",
        Category : "Adult",
    })
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "Service Already Exist";
    })
})

test("Send an empty call", async () => {
await request(index)
    .post("/service/saveService")
    .expect((response) => {
    expect(response.status).toBe(406)
    response.body.result = "Invalid Information";
    })
})

test("Update Already Inserted Service Provider Data", async () => {
    await request(index)
        .put("/service/updateServiceDetails")
        .expect("Content-Type", /json/)
        .send({
            serviceID : "IOP1",
            serviceName : "Inpatient Orthopaedic Physiotherapy",
            Category : "Child",
        })
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.result = "Hospital Data Updated";
        })
})

test("Update A non existent data from database", async () => {
    await request(index)
        .put("/service/updateServiceDetails")
        .expect("Content-Type", /json/)
        .send({
            serviceID : "UNK",
            serviceName : "Inpatient Orthopaedic Physiotherapy",
            Category : "Child",
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "service Doesnt Exist";
        })
})

test("Send empty Update call", async () => {
    await request(index)
        .put("/service/updateServiceDetails")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("Get all Service", async () => {
await request(index)
    .get("/service/getService")
    .expect((response) => {
    expect(response.status).toBe(200)
    })
})

// test("Get all Services when there is none", async () => {
//     await request(index)
//         .get("/service/getService")
//         .expect((response) => {
//         expect(response.status).toBe(404)
//         response.body.msg = "No Service Found";
//         })
// })

test("Get One Service", async () => {
    await request(index)
        .get("/service/getOneService?serviceID=IOP1")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.service[0].serviceID = "IOOT2";
        response.body.service[0].serviceName = "Inpatient Orthopaedic Occupational Therapy";
        response.body.service[0].Category = "Adult";
        })
})

test("Get A Service that doesnt exist", async () => {
    await request(index)
        .get("/service/getOneService?serviceID=UNK")
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "service Doesnt Exist";
        })
})

test("Send an empty get call", async () => {
    await request(index)
        .get("/service/getOneService")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("Get A particular Category Service", async () => {
    await request(index)
        .get("/service/getCategoryServices?Category=Adult")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.service[0].serviceID = "IOOT2";
        response.body.service[0].serviceName = "Inpatient Orthopaedic Occupational Therapy";
        response.body.service[0].Category = "Adult";
        })
})

test("Get A particular Category Service that doesnt exist", async () => {
    await request(index)
        .get("/service/getCategoryServices?Category=Unk")
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "service Doesnt Exist";
        })
})

test("Send an empty get call", async () => {
    await request(index)
        .get("/service/getCategoryServices")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

// test("send Service ID to delete entry from the Database", async () => {
// await request(index)
//     .delete(`/service/deleteService?serviceID=IOP1`)
//     .expect((response) => {
//     expect(response.status).toBe(200)
//     })
// })

test("send Service ID to delete entry from the Database that doesnt exist", async () => {
await request(index)
    .delete(`/service/deleteService?serviceID=UNK`)
    .expect((response) => {
    expect(response.status).toBe(404)
    response.body.result = "Not Found";
    })
})

test("send Empty Delete call", async () => {
    await request(index)
        .delete(`/service/deleteService`)
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})