const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: "Oleg"
        },
        {
            id: 2,
            name: "Andrew"
        },
        {
            id: 3,
            name: "Dashka"
        }

    ],
    messages: [{
            id: 1,
            message: "hello"
        },
        {
            id: 2,
            message: "How are you?"
        },
        {
            id: 3,
            message: "Yo, mazafucka"
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 4,
                    message: body
                }]
            };
        default:
            return state;
    }
}

export const sendMessageBody = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})

export default dialogsReducer;