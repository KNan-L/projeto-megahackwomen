const stickers = document.querySelectorAll('.sticker')
const dropzones = document.querySelectorAll('.dropzone')

console.log(stickers)

stickers.forEach(sticker => {
  sticker.addEventListener('dragstart', dragstart)
  sticker.addEventListener('drag', drag)
  sticker.addEventListener('dragend', dragend)
})

function dragstart() {
  //console.log('Sticker: Start Drag')
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
  this.classList.add('arrastando')
}

function drag() {
  //console.log('Sticker: Arrastando')
}

function dragend() {
  //console.log('Sticker: Fim Drag')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('arrastando')
}

// Onde Solta os Stickers
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  console.log('DropZone: Entrando Zona')
}

function dragover() {
  console.log('DropZone: Na Zona')

  this.classList.add('over')

  const stickerSendoArrastado = document.querySelector('.arrastando')

  this.appendChild(stickerSendoArrastado)
}

function dragleave() {
  //console.log('DropZone: Saindo Zona')
  this.classList.remove('over')
}

function drop() {
  //console.log('DropZone: Solto na Zona')
  this.classList.remove('over')
}
