let initialState = {
    friends: [
        {id: 1, name: "Josh", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"},
        {id: 2, name: "Ken", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"},
        {id: 3, name: "Thomas", profileImage: "https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default sidebarReducer;
