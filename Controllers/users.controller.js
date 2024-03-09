const bcryptjs = require('bcryptjs');
const UserModel = require('../Models/User.model');
exports.register = (req, res) => {

    /* step1 : search if user with the same email already exist  */
    UserModel.findOne({ email: req.body.email })
        .then((exist) => {

            if (exist) {
                res.status(406).send({ 'message': 'User already exist' })
            } else {
                var user = new User(req.body);

                /* step2 generate private key for password creating */
                bcryptjs.genSalt()
                    .then((cle) => {

                        /* step 3 : generate hashed password with the private key  */
                        bcryptjs.hash(user.password, cle)
                            .then((new_password) => {
                                user.password = new_password
                                user.save()
                                    .then((data) => {
                                        res.send(data)
                                    })
                            })
                    })

            }
        })
}

exports.login = (req, res) => {
    UserModel.findOne({ email: req.body.email })
        .then((exist) => {

            if (!exist) {
                res.status(406).send({ 'message': 'User not found' })
            } else {
               
                bcryptjs.compare(req.body.password, exist.password)
                    .then((valid) => {
                        if (!valid) {
                            res.status(406).send({ 'message': 'Invalid password' })
                        } else {
                            res.send(exist)
                        }
                    })

            }
        })
}


exports.updateAvatar = (req, res) => {

    UserModel.updateOne({ _id: req.params._id }, { avatar: req.files.avatar.path })
        .then((data) => {
            res.send(data)
        })
        .catch(err => res.status(501).send(err))
}

exports.users_list = (req, res) => {

    UserModel.find()
        .then((data) => {
            res.send(data)
        })
}

exports.delete_user = (req, res) => {
    UserModel.deleteOne({ _id: req.params.ID })
        .then((data) => {
            res.send(data)
        })
        .catch(err => res.status(501).send(err))
}


exports.update_user = (req, res) => {

    UserModel.updateOne({ _id: req.params.ID }, req.body)
        .then((data) => {
            res.send(data)
        })
        .catch(err => res.status(501).send(err))
}