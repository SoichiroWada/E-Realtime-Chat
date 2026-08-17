import { app, analytics } from "./afirebase-init.js";
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const messageInputTag = document.querySelector('#message');
const newNameForm = document.querySelector(".new-name");
const newNameInputTag = document.querySelector("#name");
const updateMssg = document.querySelector('.update-mssg');

console.log(newChatForm)
console.log(messageInputTag)

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInputTag.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
});

newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameInputTag.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

chatroom.getChats(data => chatUI.render(data));
