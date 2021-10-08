import request from "supertest";
import { app } from "../../app";

describe("404 not-found with get", () => {
    it("returns a 404 when a route doesn't exist", async () => {
        await request(app).get("/").expect(404);
        await request(app).get("/test").expect(404);
        await request(app).get("/api/public_key").expect(404);
    });
});
