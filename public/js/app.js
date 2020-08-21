document.getElementById('save').addEventListener
  ('click', event => {
    event.preventDefault()
    axios.post('/api/notes', {
      text: document.getElementById('noteTitle').value,
    })
      .then(({ data }) => {
        document.getElementById('noteTitle').value = ''
        document.getElementById('notes').append(noteElem)
      })
      .catch(err => console.log(err))
  })

document.getElementById('save').addEventListener
  ('click', event => {
    event.preventDefault()
    axios.post('/api/notes', {
      text: document.getElementById('noteText').value,
    })
      .then(({ data }) => {
        document.getElementById('noteText').value = ''
        document.getElementById('notes').append(noteElem)
      })
      .catch(err => console.log(err))
  })
