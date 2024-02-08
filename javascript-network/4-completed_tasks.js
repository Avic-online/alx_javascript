#!/usr/bin/node
// this program computes the number of tasks completed by user id

const request = require('request')

// const userId = process.argv[2]
const endpoint = 'https://jsonplaceholder.typicode.com/todos'

request(endpoint, function(error, response, body) {
    if(error) {
        console.error('Error:', error);
        process.exit(1);
    }
    if(response.statusCode !== 200) {
        console.error('Failed to retrieve data. Status Code:', response.statusCode);
        process.exit(1);
    }
    const todos = JSON.parse(body)
    const UserTaskCompleted = new Map()

    todos.forEach(todo => {
        if (todo.completed) {
            const userId = todo.userId;
            UserTaskCompleted.set(userId, (UserTaskCompleted.get(userId) || 0) + 1);
        }
    })
    UserTaskCompleted.forEach((completedTasks, userId) => {
        console.log(`User ID ${userId}: ${completedTasks} completed tasks`);
    });
})