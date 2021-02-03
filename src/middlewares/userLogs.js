const fs = require("fs");

function logMiddleware(req, res, next) {
    fs.appendFileSync("src/logs/userLogs.txt", "\nEl usuario ingreso a la ruta: " + req.url)

    next();
}

module.exports = logMiddleware;