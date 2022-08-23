const request = require("supertest");
const index = require("../index");

test("Search Service by Service Name", async () => {
await request(index)
    .get("/search/searchService?serviceName=Inpatient Orthopaedic Occupational Therapy")
    .expect((response) => {
    expect(response.status).toBe(200)
    })
})

test("Search a Service No Provider Offers", async () => {
await request(index)
    .get("/search/searchService?serviceName=Unknown 43")
    .expect((response) => {
    expect(response.status).toBe(401)
    response.body.result = "No Service Provider Offers this Service";
    })
})

test("Search a Service That doesnt exist", async () => {
await request(index)
    .get("/search/searchService?serviceName=Unknown")
    .expect((response) => {
    expect(response.status).toBe(404)
    response.body.result = "service Doesnt Exist";
    })
})

test("send an empty get Call", async () => {
await request(index)
    .get("/search/searchService")
    .expect((response) => {
    expect(response.status).toBe(406)
    response.body.result = "Invalid Information";
    })
})