import { app, analytics } from "./afirebase-init.js";
import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

const chatList = document.querySelector('.chat-list');

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

chatroom.getChats(data => chatUI.render(data));
