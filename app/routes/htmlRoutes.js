/**
 * HTML Router
 */

// Dependencies
// ----------------------------------------
const express = require("express"),
path = require("path");

// Components
// ----------------------------------------

// Router
const router = express.Router();

// Routes
// ----------------------------------------

// Get home
router.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "/app/public/home.html"));
});

// Get survey
router.get("/survey", (req, res) => {
    res.sendFile(path.join(process.cwd(), "/app/public/survey.html"));
});

// Export
// ----------------------------------------

module.exports = router;
