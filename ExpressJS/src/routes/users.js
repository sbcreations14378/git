import Router from "express";
import { checkSchema,validationResult,matchedData } from "express-validator";
import { resolveInedxByUserId } from "../utils/middlewares.js";
import { createUserValidation, getUserFilterValidation } from "../utils/validationSchema.js";
import { mockUsers } from "../utils/constants.js";
const router = Router();


router.get("/api/users", checkSchema(getUserFilterValidation), (req, res) => {
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

router.post("/api/users", checkSchema(createUserValidation), (req, res) => {
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

router.get("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex } = req;
  const user = mockUsers[findIndex];
  if (!user) return res.status(404).send({ message: "User Not Found" });
  return res.status(200).send(user);
});


router.put("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex, body } = req;
  mockUsers[findIndex] = { id: mockUsers[findIndex].id, ...body };
  return res.sendStatus(200);
});

router.patch("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { body, findIndex } = req;
  mockUsers[findIndex] = { ...mockUsers[findIndex], ...body };
  res.status(200).send(mockUsers[findIndex]);
});

router.delete("/api/users/:id", resolveInedxByUserId, (req, res) => {
  const { findIndex } = req;
  mockUsers.splice(findIndex, 1);
  res.sendStatus(200);
});


export default router;
