const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here (home)");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/seller", require("./seller.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/result", require("./result.routes"));

module.exports = router;
