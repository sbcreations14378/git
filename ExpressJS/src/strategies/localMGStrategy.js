import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../mongoose/schemas/users.js";


passport.serializeUser((user,done)=>{
    console.log("In MG serializeUser")
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    console.log("In MG deserializeUser")
    console.log(`In MG deserializing ID ${id}`)
    try {
        const findUser = await User.findById(id)
        if(!findUser) throw Error("MG User Not Authennticated")
        // console.log(findUser)
        done(null,findUser)
    } catch (error) {
        done(error,null)
    }
})

export default passport.use("local-mg",
  new Strategy(async ( username, password, done ) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not Exist");
      if (findUser.password !== password)
        throw new Error("Invalid Credentials");
      done(null, findUser);
    } catch (error) {
      console.log(error);
      done(error, null);
    }
  })
);
