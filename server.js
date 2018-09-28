/**
 * Friend Finder Server
 */

// Dependencies
// ----------------------------------------

const express = require("express"),
path = require("path"),
apiRouter = require("./app/routes/apiRoutes"),
htmlRouter = require("./app/routes/htmlRoutes");

// Components
// ----------------------------------------

// Server port
const PORT = process.env.PORT || 3000,
// Express app
app = express();

// Setup
// ----------------------------------------

// Set static directory
app.use(express.static(path.join(__dirname, "app/public")));

// Routes
// ----------------------------------------

// Use html router
app.use(htmlRouter);

// Use api router
app.use(apiRouter);

// Listen
// ----------------------------------------

app.listen(PORT, () => {
    console.log(`Friend Finder application running on port ${PORT}`);
});
