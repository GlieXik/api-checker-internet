const { app } = require("./index")
const port = process.env.PORT || 5052

app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

// Error Handler Middleware
