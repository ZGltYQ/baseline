


function prepareMessages(messages, users){
    const map_users = new Map();

    for(let user of users){
        map_users.set(user.id, user.userName);
    }


    for(let message of messages){
        message.userName = map_users.get(message.userId)
    }

    return console.log(messages)
}

prepareMessages([
    {id: 1, text: "Hello1", userId: 1},
    {id: 2, text: "Hello2", userId: 2},
    {id: 3, text: "Hello3", userId: 3},
    {id: 4, text: "Hello4", userId: 4}
], [
    {id: 1, userName: "Viktor1"},
    {id: 2, userName: "Viktor2"},
    {id: 3, userName: "Viktor3"},
    {id: 4, userName: "Viktor4"}
])