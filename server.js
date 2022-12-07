const { app } = require("./index")
const port = process.env.PORT
const errorMiddleware = require("./middlewares/error.middleware")

app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

// Error Handler Middleware
app.use(errorMiddleware)
