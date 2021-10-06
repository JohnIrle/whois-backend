import request from "supertest";
import { app } from "../../app";

it("returns a 400 with and invalid input", async () => {
    return request(app)
        .post("/api/whois")
        .send({ IPorDomain: "40" })
        .expect(400);
});
