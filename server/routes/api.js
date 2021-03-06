const express = require("express")
const router = express.Router()

const Image = require("../models/image")

router.get('/images', async (req, res) => {
    let images = await Image.find({})
    res.send(images)
})
router.post('/save', async (req, res) => {
    let addPicture = new Image({ ...req.body })
    await addPicture.save()
    res.send(addPicture)
})

router.delete('/unlike/:id', async (req, res) => {
    const { id } = req.params
    await Image.findOneAndDelete({ _id: id })
    let images = await Image.find({})
    res.send(images)
})


module.exports = router