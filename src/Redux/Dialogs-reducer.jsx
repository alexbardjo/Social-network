const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Alex',
            img: 'https://instagram.fdnk3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/55813364_2393948000671597_7058174212854251520_n.jpg?_nc_ht=instagram.fdnk3-2.fna.fbcdn.net&_nc_ohc=8TvRiLzVkNkAX8mXspl&oh=f935e1b4940cc9f98d0305e583c538a4&oe=5EB73549'
        },
        {
            id: 2,
            name: 'Anton',
            img: 'https://instagram.fdnk3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/89592909_644189229698448_3040035958721347584_n.jpg?_nc_ht=instagram.fdnk3-2.fna.fbcdn.net&_nc_ohc=8JZDfFZa5yoAX86Znue&oh=5000379d68e2d150404c868d62457aee&oe=5EBA3F73'
        },
        {
            id: 3,
            name: 'Ihor',
            img: 'https://instagram.fdnk3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/69482760_976465382694859_9042445736351891456_n.jpg?_nc_ht=instagram.fdnk3-2.fna.fbcdn.net&_nc_ohc=tYfQKhOtMfMAX9ZX7D3&oh=de115ac1006e7da3f5eafa2bff069f87&oe=5EB8F936'
        },
        {
            id: 4,
            name: 'Mikita',
            img: 'https://instagram.fdnk3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/47691162_213963062881466_785475108129996800_n.jpg?_nc_ht=instagram.fdnk3-2.fna.fbcdn.net&_nc_ohc=1VuQ-Ma3I9MAX83CeKc&oh=4767af58424e1cd789d96da46ea832a9&oe=5EB74BC3'
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Konitiva'},
        {id: 5, message: 'Aloha'},
        {id: 4, message: 'Privet'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
};


export const addMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;