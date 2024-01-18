let store = {

    _state: {

        profilePage: {

            postData: [
                {id: 1, message: "Hi, how are you?", likesCount: 11},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23}
            ],

            updatePostArea: ""

        },

        dialogsPage: {

            messages: [
                {id: 1,message: "Hi"},
                {id: 2,message: "What's new?"},
                {id: 3,message: "What's up, bro!"}
            ],

            dialogsData: [
                {id: 1,name: "Peter"}, 
                {id: 2,name: "Tom"},
                {id: 3,name: "Donald"},
                {id: 4,name: "Nick"},
                {id: 5,name: "Jack"} 
            ]
            

        },

        sideBar: {

            friends: [
                {id: 1, name: "Josh", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"},
                {id: 2, name: "Ken", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"},
                {id: 3, name: "Thomas", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"}
            ]
        },

        _callSubscriber () {
            console.log("State changed")
        }
    },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._state._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'} 
        if (action.type === 'ADD-POST') {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.updatePostArea,
                    likesCount: 0
                };
                this._state.profilePage.postData.push(newPost);
                this._state._callSubscriber(this._state);

            } else if (action.type === 'UPDATE-POST-AREA') {
                this._state.profilePage.updatePostArea = action.newText;
                this._state._callSubscriber(this._state); 
            }
    }
}

export default store;
window.store = store;
