import { app, analytics } from "./afirebase-init.js";
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

console.log(newChatForm)
console.log(newChatForm.message)

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))
});

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

chatroom.getChats(data => chatUI.render(data));
