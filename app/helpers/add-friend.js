/**
 * Add Friend Utility
 */

// Dependencies
// ----------------------------------------

const fs = require("fs"),
path = require("path");

// Functions
// ----------------------------------------

// Add friend to json file
const addFriend = (incoming) => {
    fs.readFile(path.join(process.cwd(), "app/data/friends.json"), "utf8", (err, data) => {
        if (!err) {
            const friends = JSON.parse(data);
            friends.push(incoming);
            fs.writeFile(
                path.join(process.cwd(), "app/data/friends.json"), 
                JSON.stringify(friends),
                (err) => {
                    if (!err) {
                        console.log(`${incoming.name} has been successfully added to json data file`);
                    } else {
                        console.log("Error: problem writing data");
                    }
                }
            );
        } else {
            console.log("Error: problem reading data");
        }
    });
};

// Export
// ----------------------------------------

module.exports = addFriend;
