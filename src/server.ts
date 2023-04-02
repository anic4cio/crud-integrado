import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const mongoLogin = process.env.MONGO_LOGIN
const mongoPassword = process.env.MONGO_PASS
const mongoCluster = process.env.MONGO_CLUSTER
const port = process.env.SERVER_PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json(
    { my_key: 'My value' }
  )
})

mongoose
  .connect(
    `mongodb+srv://${mongoLogin}:${mongoPassword}@${mongoCluster}.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('MongoDB connected!')
    app.listen(port, () => console.log(`Express server listen on port ${port}`))
  })
  .catch((err) => {
    console.error(err)
    throw err
  })
