const fs = require('fs')
const router = require('express').Router()
const { join } = require('path')
const uuid = require('uuid')

router.get('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'),
  'utf8', (err, data) => {
    if (err) {console.log(err)}
    res.json(JSON.parse(data))
  })
})

router.post('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'),
  'utf8', (err, data) => {
    let notes = JSON.parse(data)
    let note = {
      id: uuid.v1(),
      text: req.body.text,
    }
    notes.push(note)

    fs.writeFile(join(__dirname, '..', 'db', 'db.json'),
    JSON.stringify(notes), err => {
      if (err){console.log(err)}
      res.json(note)
    })
  })
})

