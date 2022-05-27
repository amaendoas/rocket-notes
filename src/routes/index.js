const { Router } = require("express")

const usersRoutes = require("./users.routes.js").default

const routes = Router()

routes.use("/users", usersRoutes)

module.exports = routes