import { mockUsers } from "./constants.js";
export const loggingMiddleWare = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

export const resolveInedxByUserId = (req, res, next) => {
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
