const axios = require("axios")

const fetching = async () => {
    try {
        const response = await axios.get(process.env.SITE, { timeout: 5000 })

        return true
    } catch (error) {
        return false
    }
}

module.exports = fetching
