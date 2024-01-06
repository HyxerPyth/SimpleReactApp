class store {

    rerenderEntireTree () {
        console.log("State changed")
    };

    state = {

        profilePage: {

            postData: [
                {id: 1, message: "Hi, how are you?", likesCount: 11},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 2, message: "It's my first post", likesCount: 23}
            ],

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
            ],
            

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
        }

    }


    static addPostArea = (postMessage) => {
        let postArea = {
            id: (store.state.addPostText.postArea[0] + 1),
            message: postMessage
        };

        store.state.addPostText.postArea.push(postArea);
    }

    //Add post need to be exported

    static addPost = (postMessage) => {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        };

        store.state.profilePage.postData.push(newPost);
        store.rerenderEntireTree(store.state);
    }

    //subscrive need to be exported


    static subscribe = (observer) => {
        store.rerenderEntireTree = observer;
    }

    
};

export default store;