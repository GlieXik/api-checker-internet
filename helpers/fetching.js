const axios = require("axios")
const fetching = async () => {
    try {
        //  const response = await axios("myhomerouter.hopto.org")

        const response = await axios(process.env.SITE, { timeout: 6000 })

        return true
    } catch (err) {
        return false
    }
}

module.exports = fetching
