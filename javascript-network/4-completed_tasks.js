#!/usr/bin/node
// this program computes the number of tasks completed by user id

const request = require('request')

const endpoint = 'https://jsonplaceholder.typicode.com/todos'

request(endpoint, function(error, response, body) {
    if (!error) {
        const todos = JSON.parse(body)
        let completed = {}
        todos.forEach((todo) => {
            if (todo.completed && completed[todo.userId] === underfined) {
                completed[todo.userId] = 1
            } else if (todo.completed) {
                completed[todo.userId] += 1
            }
        })
        console.log(completed)
    }
})