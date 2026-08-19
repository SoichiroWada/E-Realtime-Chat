import { app, analytics, db } from "./afirebase-init.js";
import { getFirestore, collection, addDoc, deleteDoc, getDocs, doc, Timestamp, onSnapshot, query, where, orderBy } from "./afirebase-init.js";

export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chats');
        this.unsubscribe = null;
    }
    async addChat(message) {
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: Timestamp.fromDate(new Date())
        };
        const response = await addDoc(this.chats, chat);
        return response;
    }
    getChats(callback) {
        // 1. Build the query object using constraints as separate arguments
        const queryParameter = query(
            this.chats,
            where('room', '==', this.room),
            orderBy('created_at')
        );

        // 2. Pass the query object into onSnapshot instead of the raw collection
        this.unsubscribe = onSnapshot(queryParameter, snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    callback({
                        id: change.doc.id,
                        ...change.doc.data()
                    });
                }
            });
        });
    }
    async deleteChat(id) {
        const docRef = doc(db, 'chats', id);
        await deleteDoc(docRef);
    }
    updateName(username) {
        this.username = username;
        localStorage.setItem('username:', username);
    }
    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}

// console.log("Chatroom:",Chatroom)
// console.log('db', db)
// console.log('collection', collection)