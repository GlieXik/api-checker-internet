require("dotenv").config()

const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const routes = require("./routes/api")

const express = require("express")
const app = express()
const cors = require("cors")

const fetching = require("./helpers/fetching")

app.use(cors())

app.use(express.json())

// Req and Res logger.
// !!

const msgTrue = [
    {
        to: "stefan090304@gmail.com",
        from: "stefan090304@gmail.com",
        subject: "Signal!",
        html: "<strong>Online</strong>"
    },
    {
        to: "dunikovskiy@gmail.com",
        from: "stefan090304@gmail.com",
        subject: "Signal!",
        html: "<strong>Online</strong>"
    }
]

const msgFalse = [
    {
        to: "stefan090304@gmail.com",
        from: "stefan090304@gmail.com",
        subject: "Signal!",
        html: "<strong>Online</strong>"
    },
    {
        to: "stefandunikovskyi@gmail.com",
        from: "stefan090304@gmail.com",
        subject: "Signal!",
        html: "<strong>Online</strong>"
    }
]
let toggle = true

setInterval(() => {
    fetching().then((res) => {
        console.log(res)
        if (res && toggle) {
            console.log("====================================")
            console.log("online")
            console.log("====================================")
            msgTrue.map((massege) => {
                sgMail
                    .send(massege)
                    .then(() => {
                        console.log("Email sent")
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            toggle = false
        } else if (!res && !toggle) {
            console.log("====================================")
            console.log("ofline")
            console.log("====================================")
            msgFalse.map((massege) => {
                sgMail
                    .send(massege)
                    .then(() => {
                        console.log("Email sent")
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })
            toggle = true
        }
    })
}, 6000)

app.use("/", routes)

module.exports = { app }
