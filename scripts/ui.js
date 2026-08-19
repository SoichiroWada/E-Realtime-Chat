export class ChatUI {
    constructor(list) {
        this.list = list;
    }
    clear() {
        this.list.innerHTML = '';
    }
    render(data) {
        const when = dateFns.formatDistanceToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        );
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-start" data-id="${data.id}">
                <div>
                    <span class="username">${data.username}:</span>
                    <span class="message">${data.message}</span>
                    <div class="time">${when}</div>
                </div>

                <button class="delete-btn" type="button">&times;</button>
            </li>
        `;
        // this.list.innerHTML += html;
        this.list.insertAdjacentHTML('beforeend', html);
    }
}

// const array = [1,2,3,4,5,6,7,8,9]
// console.log(...array)

// const array2 = [2,3,4,5]
// const array3 = [6,7,8]
// console.log(...array2, ...array3)