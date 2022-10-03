const router = require("express").Router();
const validateToken = require('../middleware/validateToken.middleware')

router.get("/", (req, res, next) => {
  res.json("All good in here (home)");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
router.use("/seller", require("./seller.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/result", require("./result.routes"));
router.use("/user", require("./user.routes"));
router.use("/profile", validateToken, require("./profile.routes"));
module.exports = router;
