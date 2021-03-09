const express = require('express')
const app = express()
const bodyParser = require('body-parser');

let users = []


    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html')
    })

    // create and store name and Favourite book
    app.get('/create', function(req, res){
        let user = {
            name : req.query.name,
            favBook : req.query.favBook,
        }
        users.push(user)
        res.send(user)
    })

    // route to show all books in favBooks.html page
    app.get('/favBooks', function(req, res){
        res.sendFile(__dirname + '/favBooks.html')
    })


    // show all books
    app.get('/showBooks', function(req, res){
        let data = JSON.stringify(users)
        res.send(data)
    })

    // calculate most favoured books (this code isn't running)
    app.get('/calFavBook', function(req, res){
    
        let highest = 0
        let favBook = '' 
        for (let user of users) {
            console.log(user)
            if (user.favBook > highest) {
                console.log(user)
                highest = user.favBook
                favBook = user.favBook
            }
        }
        console.log(favBook)
        res.send(favBook)
    })

    app.listen(9111)
    console.log('Server is running on port 9111')