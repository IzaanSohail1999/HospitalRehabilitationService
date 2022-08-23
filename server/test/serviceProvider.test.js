const request = require("supertest");
const index = require("../index");

test("Save Service Provider", async () => {
    await request(index)
      .post("/serviceProvider/saveServiceProvider")
      .expect("Content-Type", /json/)
      .send({
            name : "Alton Community Hospital",
            postcode : "GU34 1RJ",
            phone : "0300 0032196",
            website : "https://www.hampshirehospitals.nhs.uk",
            ccgboundary : "NHS North Hampshire CCG",
            type : "NHS",
            serviceID: 
            [   
                "IOP1","IOOT2","MP3", 
                "H4", "OHT5","HBI6",
                "BBR7","CP8","COT9",
                "CN10","WS11","TA12",
                "TP113","TP214","WS15",
                "PO16","X17","TS018"
            ]
      })
      .expect((response) => {
        expect(response.status).toBe(200)
        response.body.result = "Service Provider Data Saved";
      })
  })

test("Send an already saved data", async () => {
await request(index)
    .post("/serviceProvider/saveServiceProvider")
    .expect("Content-Type", /json/)
    .send({
        name : "Alton Community Hospital",
        postcode : "GU34 1RJ",
        phone : "0300 0032196",
        website : "https://www.hampshirehospitals.nhs.uk",
        ccgboundary : "NHS North Hampshire CCG",
        type : "NHS",
        serviceID: 
        [   
            "IOP1","IOOT2","MP3", 
            "H4", "OHT5","HBI6",
            "BBR7","CP8","COT9",
            "CN10","WS11","TA12",
            "TP113","TP214","WS15",
            "PO16","X17","TS018"
        ]
    })
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "Provider Already Exist";
    })
})

test("Send an empty call", async () => {
await request(index)
    .post("/serviceProvider/saveServiceProvider")
    .expect((response) => {
    expect(response.status).toBe(406)
    response.body.result = "Invalid Information";
    })
})

test("Get all Service Provider", async () => {
await request(index)
    .get("/serviceProvider/getServiceProvider")
    .expect((response) => {
    expect(response.status).toBe(200)
    })
})

// test("Get all Service Provider when there is none", async () => {
//     await request(index)
//         .get("/serviceProvider/getServiceProvider")
//         .expect((response) => {
//         expect(response.status).toBe(404)
//         response.body.msg = "No User Found";
//         })
// })

test("Get a Particular Service Provider", async () => {
    await request(index)
        .get("/serviceProvider/getParticularServiceProvider?name=Airedale General Hospital&postcode=BD20 6TD&phone=01535 652511&website=http://www.airedale-trust.nhs.uk/&ccgboundary=NHS Bradford District and Craven CCG&type=NHS")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.serviceprovider[0].name = "Airedale General Hospital";
        response.body.serviceprovider[0].postcode = "BD20 6TD";
        response.body.serviceprovider[0].phone = "01535 652511";
        response.body.serviceprovider[0].website = "http://www.airedale-trust.nhs.uk/";
        response.body.serviceprovider[0].ccgboundary = "NHS Bradford District and Craven CCG";
        response.body.serviceprovider[0].type = "NHS";
        })
})

test("Get a Particular Service Provider that doesnt exist", async () => {
await request(index)
    .get("/serviceProvider/getParticularServiceProvider?name=unknown&postcode=BD20 6TD&phone=01535 652511&website=http://www.airedale-trust.nhs.uk/&ccgboundary=NHS Bradford District and Craven CCG&type=NHS")
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "Service Provider Doesnt Exist";
    })
})

test("send an empty get call to fetch particular Service provider", async () => {
    await request(index)
        .get("/serviceProvider/getParticularServiceProvider")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("Get One Service Provider", async () => {
    await request(index)
        .get("/serviceProvider/getOneServiceProvider?name=Airedale General Hospital")
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.serviceprovider[0].name = "Airedale General Hospital";
        response.body.serviceprovider[0].postcode = "BD20 6TD";
        response.body.serviceprovider[0].phone = "01535 652511";
        response.body.serviceprovider[0].website = "http://www.airedale-trust.nhs.uk/";
        response.body.serviceprovider[0].ccgboundary = "NHS Bradford District and Craven CCG";
        response.body.serviceprovider[0].type = "NHS";
        })
})

test("Get a Service Provider that doesnt exist", async () => {
await request(index)
    .get("/serviceProvider/getOneServiceProvider?name=unknown")
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "serviceprovider Doesnt Exist";
    })
})

test("send an empty get call to fetch Service provider", async () => {
    await request(index)
        .get("/serviceProvider/getParticularServiceProvider")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("Update Already Inserted Service Provider Data", async () => {
    await request(index)
        .put("/serviceProvider/updateServiceProviderDetails")
        .expect("Content-Type", /json/)
        .send({
            name : "Alton Community Hospital",
            postcode : "GU34 1RJ",
            phone : "0332 2400629",
            website : "https://www.hampshirehospitals.nhs.uk",
            ccgboundary : "NHS North Hampshire CCG",
            type : "NHS",
            serviceID: 
            [   
                "IOP1","IOOT2","MP3", 
                "H4", "OHT5","HBI6",
                "BBR7","CP8","COT9",
                "CN10","WS11","TA12",
                "TP113","TP214","WS15",
                "PO16","X17","TS018"
            ]
        })
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.result = "Service Provider Data Updated";
        })
})

test("Update Service Provider Data that doesnt exist", async () => {
    await request(index)
        .put("/serviceProvider/updateServiceProviderDetails")
        .expect("Content-Type", /json/)
        .send({
            name : "unknown",
            postcode : "GU34 1RJ",
            phone : "0332 2400629",
            website : "https://www.hampshirehospitals.nhs.uk",
            ccgboundary : "NHS North Hampshire CCG",
            type : "NHS",
            serviceID: 
            [   
                "IOP1","IOOT2","MP3", 
                "H4", "OHT5","HBI6",
                "BBR7","CP8","COT9",
                "CN10","WS11","TA12",
                "TP113","TP214","WS15",
                "PO16","X17","TS018"
            ]
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "serviceprovider Doesnt Exist";
        })
})
    
test("Send an empty update call", async () => {
    await request(index)
        .put("/serviceProvider/updateServiceProviderDetails")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("send name to delete entry from the Database", async () => {
await request(index)
    .delete(`/serviceProvider/deleteServiceProvider?name=Alton Community Hospital`)
    .expect((response) => {
    expect(response.status).toBe(200)
    })
})

test("send name to delete entry from the Database that has already been deleted", async () => {
await request(index)
    .delete(`/serviceProvider/deleteServiceProvider?name=Alton Community Hospital`)
    .expect((response) => {
    expect(response.status).toBe(404)
    response.body.result = "Not Found";
    })
})

test("send empty data to delete tp delete call", async () => {
await request(index)
    .delete(`/serviceProvider/deleteServiceProvider`)
    .expect((response) => {
    expect(response.status).toBe(406)
    response.body.result = "Invalid Information";
    })
})

// test("Add a new service to the provider", async () => {
//     await request(index)
//         .put("/serviceProvider/addService")
//         .expect("Content-Type", /json/)
//         .send({
//             name : "Airedale General Hospital",
//             serviceID: "XYZ19"
//         })
//         .expect((response) => {
//         expect(response.status).toBe(200)
//         response.body.result = "service Added";
//         })
// })

test("Add an already added service to the provider", async () => {
    await request(index)
        .put("/serviceProvider/addService")
        .expect("Content-Type", /json/)
        .send({
            name : "Airedale General Hospital",
            serviceID: "XYZ19"
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "Service Already Exist";
        })
})

test("Try to add service to a provider that doesnt exist", async () => {
    await request(index)
        .put("/serviceProvider/addService")
        .expect("Content-Type", /json/)
        .send({
            name : "Unknown",
            serviceID: "XYZ19"
        })
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "service provider Doesnt Exist";
        })
})

test("Send empty put call", async () => {
    await request(index)
        .put("/serviceProvider/addService")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})

test("Remove a service from the provider", async () => {
    await request(index)
        .put("/serviceProvider/removeService")
        .expect("Content-Type", /json/)
        .send({
            name : "Airedale General Hospital",
            serviceID: "XYZ19"
        })
        .expect((response) => {
        expect(response.status).toBe(200)
        response.body.result = "service Removed";
        })
})

test("Remove an already removed service from the provider", async () => {
    await request(index)
        .put("/serviceProvider/removeService")
        .expect("Content-Type", /json/)
        .send({
            name : "Airedale General Hospital",
            serviceID: "XYZ19"
        })
        .expect((response) => {
        expect(response.status).toBe(401)
        response.body.result = "service Doesnt Exist";
        })
})

test("remove a service from a provider that doesnt exist", async () => {
    await request(index)
        .put("/serviceProvider/removeService")
        .expect("Content-Type", /json/)
        .send({
            name : "Unknown",
            serviceID: "XYZ19"
        })
        .expect((response) => {
        expect(response.status).toBe(404)
        response.body.result = "service provider Doesnt Exist";
        })
})

test("Send empty put call", async () => {
    await request(index)
        .put("/serviceProvider/removeService")
        .expect((response) => {
        expect(response.status).toBe(406)
        response.body.result = "Invalid Information";
        })
})