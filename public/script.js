const socket = io()
const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat_field.chat_message')
const chatWindow = document.querySelector('.chat_converse')



const renderMessage = message => {
    const div = document.createElement('div')
    div.classList.add('render-message')
    div.innerText = message
    div.innerHTML = `
    <span class="chat_msg_item chat_msg_item_admin">
   
      ${message}
      <span class="status"></span>`;
    chatWindow.appendChild(div)
  }
chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('chat', Input.value)
  Input.value = ''
})
socket.on('chat', message => {
    //console.log('From server: ', message)
    renderMessage(message)
  })

