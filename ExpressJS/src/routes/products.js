import Router from "express";

const router = Router();

router.get("/api/products", (req, res) => {
  console.log(req.headers.cookie);
  console.log(req.cookies);
  console.log(req.signedCookies)

  if (req.signedCookies.first && req.signedCookies.first === "Hello Test")
    return res.send([
      { id: 111, name: "Egg Fried Rice", price: 87.9 },
      { id: 222, name: "Chicken Fried Rice", price: 100 },
      { id: 333, name: "Veg Fried Rice", price: 78.9 },
    ]);
  return res.status(403).send({msg:"Sorry, you need correct Cookies"})
});

export default router;
