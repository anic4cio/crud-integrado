import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { Universities } from './Universities'

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

app.post('/universities', async (req, res) => {
  const {
    state_province,
    web_pages,
    country,
    name,
    alpha_two_code,
    domains
  } = req.body

  const university = {
    state_province,
    web_pages,
    country,
    name,
    alpha_two_code,
    domains
  }

  try {
    await Universities.create(university)
    res.status(201).json({ message: 'University info suscessfully registered' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
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
