import express from "express";
import {
  query,
  validationResult,
  body,
  matchedData,
  checkSchema,
} from "express-validator";
import {
  createUserValidation,
  getUserFilterValidation,
} from "./utils/validationSchema.js";
const app = express();

app.use(express.json());

const loggingMiddleWare = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};
const resolveInedxByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400);
  const findIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findIndex == -1) return res.sendStatus(404);
  req.findIndex = findIndex;
  next();
};
app.use(loggingMiddleWare);

const port = process.env.PORT || 8888;

const mockUsers = [
  { id: 1, username: "sai", displayname: "Sai" },
  { id: 2, username: "ajith", displayname: "Ajith" },
  { id: 3, username: "kumar", displayname: "Kumar" },
  { id: 4, username: "dannana", displayname: "Dannana" },
  { id: 5, username: "tarun", displayname: "Tarun" },
  { id: 6, username: "nani", displayname: "Nani" },
  { id: 7, username: "ajji", displayname: "Ajji" },
];

app.listen(port, () => {
  console.log(`Server Ruuning on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi This is ExpressJS Practice");
});

app.get("/api/users", checkSchema(getUserFilterValidation), (req, res) => {
  const result = validationResult(req);
  console.log(result);
  const {
    query: { filter, value },
  } = req;
  if (filter && value)
    return res
      .status(200)
      .send(mockUsers.filter((user) => user[filter].includes(value)));
  res.send(mockUsers);
});

app.post("/api/users", checkSchema(createUserValidation), (req, res) => {
  const result = validationResult(req);
  console.log(result);
  if (!result.isEmpty())
    return res.status(400).send({ errors: result.array() });

  const data = matchedData(req);
  console.log(data);
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
  mockUsers.push(newUser);
  res.status(201).send(newUser);
});

app.get("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex } = req;
  const user = mockUsers[findIndex];
  if (!user) return res.status(404).send({ message: "User Not Found" });
  return res.status(200).send(user);
});

app.put("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex, body } = req;
  mockUsers[findIndex] = { id: mockUsers[findIndex].id, ...body };
  return res.sendStatus(200);
});

app.patch("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { body, findIndex } = req;
  mockUsers[findIndex] = { ...mockUsers[findIndex], ...body };
  res.status(200).send(mockUsers[findIndex]);
});

app.delete("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex } = req;
  mockUsers.splice(findIndex, 1);
  res.sendStatus(200);
});
