import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import allRoutes from "./routes/index.js";
import { loggingMiddleWare, userAuthentication } from "./utils/middlewares.js";
const app = express();

app.use(express.json());
app.use(loggingMiddleWare);
app.use(cookieParser("practice"));
app.use(
  session({
    secret: "lets learn",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);

app.use(allRoutes);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server Ruuning on ${port}`);
});

app.get("/", (req, res) => {
  console.log(req.session.id);
  req.session.visited = true;
  res.cookie("first", "Hello Test", { maxAge: 60000 * 60 * 24, signed: true });
  res.send("Hi This is ExpressJS Practice");
});

app.post("/api/auth", userAuthentication, (req, res) => {
  const {
    session: { user },
  } = req;
  if (user) {
    console.log(req.session.id);
    console.log(user);
    res.status(200).send({ msg: "Login Success" });
  }
});

app.get("/api/auth/status", (req, res) => {
  req.sessionStore.get(req.sessionID, (err, sessionData) => {
    if (err) console.log(err);
    console.log(sessionData);
  });

  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "Not Authenticated" });
});

app.post("/api/cart", (req, res) => {
  if (!req.session.user) return res.sendStatus(401);
  const { body: item } = req;
  const { cart } = req.session;
  if (cart) {
    cart.push(item);
  } else {
    req.session.cart = [item];
  }
  res.status(201).send(item);
});

app.get('/api/cart',(req,res)=>{
  const { cart } = req.session;
  if (!req.session.user) return res.sendStatus(401);
  return res.status(200).send(cart ?? 'No Item(s) in  Cart')
  
})