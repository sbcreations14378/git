import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
// import session from "express-session";
// import passport from "passport";
// import allRoutes from "./routes/index.js";
// import "./strategies/localMGStrategy.js";
// import "./strategies/localStrategy.js";
// import { loggingMiddleWare, userAuthentication } from "./utils/middlewares.js";
// import mongoose from "mongoose";
// import MongoStore from "connect-mongo";

const app = express();
// const murl = `mongodb+srv://sbcreations:sbcreations@cluster0.ao6t0sl.mongodb.net/expressjs`;
// mongoose
//   .connect(murl)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

app.use(cors());
// app.use(express.json());
// app.use(loggingMiddleWare);
// app.use(cookieParser("practice"));
// app.use(
//   session({
//     secret: "lets learn",
//     saveUninitialized: false,
//     resave: true,
//     cookie: {
//       maxAge: 60000 * 60,
//     },
//     store: MongoStore.create({
//       client: mongoose.connection.getClient(),
//     }),
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(allRoutes);

// app.post("/api/auth/pp", passport.authenticate("local"), (req, res) => {
//   // console.log(req.session.passport);
//   res.sendStatus(200);
// });

// app.get("/api/auth/pp/status", (req, res) => {
//   req.sessionStore.get(req.sessionID, (err, sessionData) => {
//     if (err) console.log(err);
//     console.log(sessionData);
//   });
//   return req.user
//     ? res.status(200).send(req.user)
//     : res.status(401).send({ msg: "Not Authenticated" });
// });

// app.post("/api/auth/pp/logout", (req, res) => {
//   if (!req.user) return res.sendStatus(401);
//   req.logOut((err) => {
//     if (err) return res.sendStatus(400);
//     res.sendStatus(200);
//   });
// });

const port =  8888;

app.listen(port, () => {
  console.log(`Server Ruuning on ${port}`);
});

app.get("/", (req, res) => {
  console.log(req.session.id);
  // req.session.visited = true;
  res.cookie("first", "Hello Test", { maxAge: 60000 * 60 * 24, signed: true });
  res.send("Hi This is ExpressJS Practice");
});

// app.post("/api/auth", userAuthentication, (req, res) => {
//   const {
//     session: { user },
//   } = req;
//   if (user) {
//     console.log(req.session.id);
//     console.log(user);
//     res.status(200).send({ msg: "Login Success" });
//   }
// });

// app.get("/api/auth/status", (req, res) => {
//   req.sessionStore.get(req.sessionID, (err, sessionData) => {
//     if (err) console.log(err);
//     console.log(sessionData);
//   });

//   return req.session.user
//     ? res.status(200).send(req.session.user)
//     : res.status(401).send({ msg: "Not Authenticated" });
// });

// app.post("/api/cart", (req, res) => {
//   if (!req.session.passport) return res.sendStatus(401);
//   const { body: item } = req;
//   const { cart } = req.session;
//   if (cart) {
//     cart.push(item);
//   } else {
//     req.session.cart = [item];
//   }
//   res.status(201).send(item);
// });

// app.get("/api/cart", (req, res) => {
//   const { cart } = req.session;
//   if (!req.session.passport) return res.sendStatus(401);
//   return res.status(200).send(cart ?? "No Item(s) in  Cart");
// });

// app.post("/api/auth/pp/mg/", passport.authenticate("local-mg"), (req, res) => {
//   res.sendStatus(200);
// });

// app.get("/api/auth/pp/mg/status", (req, res) => {
//   req.sessionStore.get(req.sessionID, (err, sessionData) => {
//     if (err) console.log(err);
//     console.log(req.sessionID);
//   });
//   return req.user
//     ? res.status(200).send(req.user)
//     : res.status(401).send({ msg: "Not Authenticated" });
// });

// app.post("/api/auth/pp/mg/logout", (req, res) => {
//   if (!req.user) return res.sendStatus(401);
//   req.logOut((err) => {
//     if (err) return res.sendStatus(400);
//     res.sendStatus(200);
//   });
// });
