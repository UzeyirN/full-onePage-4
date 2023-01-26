const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;
const courseSchema = new Schema(
    {

        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        authorPhoto: {
            type: String,
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }

    },
    { timestamps: false }
)

mongoose.set("strictQuery", false)

const Courses = mongoose.model("courses", courseSchema)

const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("CONNECTED");
        app.listen(PORT, () => {
            console.log((`PORT:${PORT}`));
        })
    }
})

app.get("/courses", (req, res) => {
    Courses.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/courses/:id", (req, res) => {
    const { id } = req.params;
    Courses.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(400).json({ message: err })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})

app.post("/courses", async (req, res) => {
    const courses = req.body
    try {
        await Courses.create(courses)
        res.status(200).json({
            message: "success"
        })

    } catch (error) {
        console.log(error);
    }
})

app.delete("/courses/:id", (req, res) => {
    const { id } = req.params;
    Courses.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESS DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})
