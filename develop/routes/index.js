const router = require("express").Router();
const notesRouter = require("./noteRoute");

router.use("/notes", notesRouter);

module.exports = router;