import { app, analytics } from "./afirebase-init.js";
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const messageInputTag = document.querySelector('#message');
const newNameForm = document.querySelector(".new-name");
const newNameInputTag = document.querySelector("#name");
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInputTag.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
});

//update the username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameInputTag.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

//update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'unknown';

//initialization from class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//get chats & render
chatroom.getChats(data => chatUI.render(data));
