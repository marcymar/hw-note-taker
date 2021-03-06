const fs = require('fs')
const router = require('express').Router()
const { join } = require('path')
const uuid = require('uuid')

router.get('/notes', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'),
    'utf8', (err, data) => {
      if (err) { console.log(err) }
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
        title: req.body.title
      }
      notes.push(note)

      fs.writeFile(join(__dirname, '..', 'db', 'db.json'),
        JSON.stringify(notes), err => {
          if (err) { console.log(err) }
          res.json(note)
        })
    })
})


router.delete('/notes/:id', (req, res) => {
  fs.readFile(join(__dirname, '..', 'db', 'db.json'),
  'utf8', (err, data) => {
      if (err) { console.log(err) }

  let notes = JSON.parse(data)
  notes = notes.filter(note => note.id !== req.params.id)
  

  fs.writeFile(join(__dirname, '..', 'db', 'db.json'), JSON.stringify(items), err => {
    if (err) {console.log(err)}

    res.sendStatus(200)
  })
})

module.exports = router