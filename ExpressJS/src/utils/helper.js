import bcrypt, { compareSync, genSaltSync, hashSync } from "bcrypt";

const saltR = 10;
export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltR);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);
