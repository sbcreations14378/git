import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { User } from "../mongoose/schemas/users.js";
import { createUserValidation } from "../utils/validationSchema.js";

const router = Router();

router.get("/api/mg/", (req, res) => {
  res.send({ msg: "MongoDB" });
});

router.post(
  "/api/mg/users",
  checkSchema(createUserValidation),
  async (req, res) => {
    const result = validationResult(req);
    const data = matchedData(req);

    if (!result.isEmpty) return res.stauts(400).send(result.array());

    try {
      const newUser = new User(data);
      const savedUser = await newUser.save();
      return res.status(201).send(savedUser);
    } catch (error) {
      return res.sendStatus(400);
    }
  }
);

export default router;
