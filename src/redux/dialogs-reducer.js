const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_AREA = "UPDATE-MESSAGE-AREA";

let initialState = {
    messages: [
        {id: 1,message: "Hi"},
        {id: 2,message: "What's new?"},
        {id: 3,message: "What's up, bro!"}
    ],
    updateMessageArea: "",
    dialogsData: [
        {id: 1,name: "Peter"}, 
        {id: 2,name: "Tom"},
        {id: 3,name: "Donald"},
        {id: 4,name: "Nick"},
        {id: 5,name: "Jack"} 
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let sendMessage = { 
                id: 4,
                message: state.updateMessageArea
            };
            state.updateMessageArea = "";
            state.messages.push(sendMessage);
            return state;
        case UPDATE_MESSAGE_AREA:
            state.updateMessageArea = action.body; 
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageAreaActionCreator = (body) => ({ type: UPDATE_MESSAGE_AREA, body: body });

export default dialogsReducer;
