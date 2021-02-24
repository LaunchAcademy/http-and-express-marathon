import express from "express"
import productsRouter from "./productsRouter.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.render("index")
})

rootRouter.use("/products", productsRouter)

export default rootRouter
