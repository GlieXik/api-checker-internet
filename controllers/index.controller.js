const fetching = require("../helpers/fetching")

exports.index = async (req, res) => {
    let status
    await fetching().then((res) => {
        status = res
    })

    res.json({ status })
}
