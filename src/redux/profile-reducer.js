const ADD_POST = "ADD-POST";
const UPDATE_POST_AREA = "UPDATE-POST-AREA";

let initialState = {
    postData: [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "It's my first post", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 23}
    ],
    updatePostArea: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.updatePostArea,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                updatePostArea: ""
            }; 
        case UPDATE_POST_AREA:
            return {
                ...state,
                updatePostArea: action.newText
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostAreaActionCreator = (text) => ({type: UPDATE_POST_AREA, newText: text });

export default profileReducer;

