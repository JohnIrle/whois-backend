import request from "supertest";
import { app } from "../../app";
const data = require("../../mocks/whoisResponse.json");

it("returns a 400 with an empty string", async () => {
    return request(app).post("/api/whois").send({ IPorDomain: "" }).expect(400);
});

it("returns a 400 with an invalid IP", async () => {
    await request(app)
        .post("/api/whois")
        .send({ IPorDomain: "40" })
        .expect(400);

    await request(app)
        .post("/api/whois")
        .send({ IPorDomain: "40.4" })
        .expect(400);
});

it("returns a 400 with an invalid domain", async () => {
    return request(app)
        .post("/api/whois")
        .send({ IPorDomain: "www" })
        .expect(400);
});

it("returns a 201 is input is valid ip", async () => {
    return request(app)
        .post("/api/whois")
        .send({ IPorDomain: "192.168.9.99" })
        .expect(201);
});

it("returns a 201 if input is valid url", async () => {
    return request(app).post("/api/whois").send({ IPorDomain: "www.test" });
});

it("returns data from the whois service", async () => {
    const response = await request(app)
        .post("/api/whois")
        .send({ IPorDomain: "www.johnirle.com" });
    expect(response.body).toEqual(data);
});
