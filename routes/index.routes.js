const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/seller", require("./seller.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;