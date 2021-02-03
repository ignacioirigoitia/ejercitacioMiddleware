module.exports = {
    index: (req, res) => {
        res.render("index")
    },

    admin: (req, res) => {
        res.render("admin", {
            welcome: "Hola admin: " + req.query.user
        })
    }
}