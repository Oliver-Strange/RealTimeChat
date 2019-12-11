require("dotenv").config();

const server = require("./api/server.js");

port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server has started.`));
