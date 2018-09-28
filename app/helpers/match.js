/**
 * Match Utility
 */

// Dependencies
// ----------------------------------------

const fs = require("fs"),
path = require("path");

// Functions
// ----------------------------------------

// Find friend match
const find = (incoming, res) => {
    fs.readFile(path.join(process.cwd(), "app/data/friends.json"), "utf8", (err, data) => {
        if (!err) {
            const friends = JSON.parse(data);
            let bestMatch,
            bestMatchDiff;
            friends.forEach((friend) => {
                let diff = 0;
                friend.scores.forEach((score, i) => {
                    diff += Math.abs(score - incoming.scores[i]);
                });
                if (bestMatch) {
                    bestMatch = diff <= bestMatchDiff ? friend : bestMatch;
                    bestMatchDiff = diff <= bestMatchDiff ? diff : bestMatchDiff;
                } else {
                    bestMatch = friend;
                    bestMatchDiff = diff;
                }
            });
            res.status(200).json(bestMatch);
        } else {
            res.status(500).send(null);
        }
    });
};

// Export
// ----------------------------------------

module.exports = find;
