const fetching = require("../helpers/fetching")

exports.index = async (req, res) => {
    const resoult = await fetching()

    res.json({ resoult })
}
