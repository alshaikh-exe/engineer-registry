const request = require("supertest"); 
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const Engineer = require("../models/engineer");

const server = app.listen(8080, () => {
    console.log("Testing on port 8080...");
});

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
    await mongoose.connection.close(); 
    mongoServer.stop(); 
    server.close(); 
});

describe("Testing the engineers endpoints", () => {

   test("It should create a new engineer", async () => {
  const response = await request(app)
    .post("/engineers")
    .send({ name: "Jack Black", specialty: "Electronics", yearsExperience: 7, available: true });

  expect(response.statusCode).toBe(200);
  expect(response.body.name).toEqual("Jack Black");
  expect(response.body.specialty).toEqual("Electronics");
  expect(response.body.yearsExperience).toEqual(7);
  expect(response.body.available).toEqual(true);
});

test("It should update an engineer", async () => {
  const engineer = new Engineer({ name: "Jack Black", specialty: "Electronics", yearsExperience: 7, available: true });
  await engineer.save();

  const response = await request(app)
    .put(`/engineers/${engineer._id}`)
    .send({ name: "Jack Black", specialty: "Electronics", yearsExperience: 7, available: true });

  expect(response.statusCode).toBe(200);
  expect(response.body.name).toEqual("Jack Black");
  expect(response.body.specialty).toEqual("Electronics");
  expect(response.body.yearsExperience).toEqual(7);
  expect(response.body.available).toEqual(true);
});

test("It should delete an engineer", async () => {
  const engineer = new Engineer({ name: "Jack Black", specialty: "Electronics", yearsExperience: 7, available: true });
  await engineer.save();

  const response = await request(app)
    .delete(`/engineers/${engineer._id}`);

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toEqual("engineer deleted");
});
});
