import express, { response } from "express";

const app = express();

app.use(express.json());

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server Ruuning on ${port}`);
});

const mockUsers = [
  { id: 1, username: "sai", displayname: "Sai" },
  { id: 2, username: "ajith", displayname: "Ajith" },
  { id: 3, username: "kumar", displayname: "Kumar" },
  { id: 4, username: "dannana", displayname: "Dannana" },
  { id: 5, username: "tarun", displayname: "Tarun" },
  { id: 6, username: "nani", displayname: "Nani" },
  { id: 7, username: "ajji", displayname: "Ajji" },
];

app.get("//", (req, res) => {
  res.send("Hi This is ExpressJS Practice");
});

app.get("/api/users", (req, res) => {
  const {
    query: { filter, value },
  } = req;
  if (filter && value)
    res
      .status(200)
      .send(mockUsers.filter((user) => user[filter].includes(value)));
  return res.status(200).send(mockUsers);
});

app.post("/api/users", (req, res) => {
  const { body } = req;
  const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
  mockUsers.push(newUser);
  res.status(201).send(newUser);
});

app.get("/api/users/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  if (isNaN(parseInt(id)))
    return res.status(400).send({ message: "Id Must be a No" });
  const user = mockUsers.find((u) => u.id === parseInt(id));
  if (!user) res.status(404).send({ message: "User Not Found" });
  res.status(200).send(user);
});

app.put("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400).send("NaN");
  const findIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findIndex == -1) res.status(404).send("user not found");
  mockUsers[findIndex] = { ...mockUsers[findIndex], ...body };
  res.status(200).send(mockUsers[findIndex]);
});

app.patch("/api/users/:id", (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400).send("NaN");
  const findIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findIndex == -1) res.status(404).send("user not found");
  mockUsers[findIndex] = { ...mockUsers[findIndex], ...body };
  res.status(200).send(mockUsers[findIndex]);
});

app.delete("/api/users/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return res.sendStatus(400).send("NaN");
  const findIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findIndex == -1) res.status(404).send("user not found");
  mockUsers.splice(findIndex,1);
  res.sendStatus(200);
});
