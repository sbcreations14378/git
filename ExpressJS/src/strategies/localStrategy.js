import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.js";

passport.serializeUser((user, done) => {
    console.log(`Inside SerilizerUser`)
    console.log(user)
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log(`Inside deserilizerUser`)
    console.log(`Deserilizing User Id ${id}`)
  try {
    const findUser = mockUsers.find((user) => user.id === id);
    if (!findUser) throw new Error("Not Authenitcated");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy((username, password, done) => {
    // console.log(`Username: ${username}`);
    // console.log(`Password: ${password}`);
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("User Not Found");
      if (findUser.password != password) throw new Error("Invalid Credentials");
      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
