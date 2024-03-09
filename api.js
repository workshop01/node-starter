const multipart = require("connect-multiparty")
const { register, login, updateAvatar, users_list, delete_user, update_user } = require("./Controllers/users.controller")


const mulitpart = require('connect-multiparty')
const upload = multipart({uploadDir : './storage'})

const crud = require('./Controllers/crud.controller')
module.exports = (app) => {
 


   

    /* remplacer data par votre table categories , produits ... */
     /* data apis */
     app.get('/data_list' , crud.get_list)
     app.get('/data_by_id/:ID' , crud.get_by_id)
     app.post('/data/add' , crud.add)
     app.put('/data/update/:ID' , crud.update)
     app.delete('/data/delete/:ID' , crud.delete )
     app.delete('/data/delete_list' , crud.delete_list)


     /* user apis */
    app.post('/register' , register)
    app.post('/login' , login)
    app.put('/update_avatar/:_id' , upload  , updateAvatar)
    app.get('/users' , users_list)
    app.delete('/user/delete/:ID' , delete_user )
    app.put('/user/update/:ID' , update_user)


    
}