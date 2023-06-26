import request from "supertest";
import app from "./app";

describe("API Tests", () => {
  it("Get - /dictionary", async () => {
    const { body } = await request(app).get("/dictionary");
    expect(body.length).toEqual(3);
  });
});
