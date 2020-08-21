document.getElementById('save').addEventListener
  ('click', event => {
    event.preventDefault()
    axios.post('/api/notes', {
      text: document.getElementById('noteTitle').value,
    })
      .then(({ data }) => {
        document.getElementById('noteTitle').value = ''
        let noteElem = document.createElement('p')
        noteElem.innerHTML = `
        
      <div class="col-8">
        <input id="noteTitle" class="note-title" placeholder="Note Title" maxlength="28" type="text">
        <textarea id="noteText" class="note-textarea" placeholder="Note Text">${data.text}</textarea>
      </div>

        `
        document.getElementById('notes').append(noteElem)
      })
      .catch(err => console.log(err))
  })

document.addEventListener('click', event => {
  if (event.target.className === 'complete') {

    axios.put(`/api/notes/${event.target.dataset.id}`,)

      .catch(err => console.log(err))

  } else if (event.target.className === 'delete') {
    axios.delete(`/api/notes/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.log(err))
  }
})