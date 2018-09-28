/**
 * API Router
 */

// Dependencies
// ----------------------------------------
const bodyParser = require("body-parser"),
express = require("express"),
path = require("path"),
match = require("../helpers/match"),
addFriend = require("../helpers/add-friend");

// Components
// ----------------------------------------

// Router
const router = express.Router(),
// Parse url encoded
parseUrl = bodyParser.urlencoded({extended: true}),
// Parse json
parseJson = bodyParser.json();

// Routes
// ----------------------------------------

// Get friends
router.get("/api/friends", (req, res) => {
    res.sendFile(path.join(process.cwd(), "/app/data/friends.json"));
});

// Post friends
router.post("/api/friends", parseUrl, (req, res) => {
    const {body: newFriend} = req;
    addFriend(newFriend);
    // match(newFriend);
    res.json(req.body);
});

// Export
// ----------------------------------------

module.exports = router;
