let store = {

    _state: {

        profilePage: {

            postData: [
                {id: 1, message: "Hi, how are you?", likesCount: 11},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23}
            ]

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

        addPostText: {
            
            postArea: [
                {id: 1, message: ""}
            ]
        },

        _callSubscriber () {
            console.log("State changed")
        }
    },

    getState () {
        return this._state;
    },
    
    addPostArea (postMessage) {
        let postArea = {
            id: (store.this._state.addPostText.postArea[0] + 1),
            message: postMessage
        };

        store.getState().addPostText.postArea.push(postArea);
    },

    //Add post need to be exported

    addPost (postMessage) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        };

        store.this._state.profilePage.postData.push(newPost);
        store.this._state._callSubscriber(store.this._state);
    },

    //subscrive need to be exported


    subscribe (observer) {
        store.this._state._callSubscriber = observer;
    }

}

export default store;
window.store = store;