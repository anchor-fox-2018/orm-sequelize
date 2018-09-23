const Model = require("../models")
const Authors = Model.Authors;
class AuthorController {
    static add(authorName) {
        Authors.create({
            name: authorName
        });
    }
    static readOne(authorName) {
        Authors.findOne({
            name: authorName
        })
            .then(function (data) {
                data.forEach(element => {
                    console.log(element.dataValues);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static readAll() {
        Authors.findAll()
            .then(function (data) {
                data.forEach(element => {
                    console.log(element.dataValues);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static update(id, newAuthorName) {
        Authors.findOne({
            id: id
        })
            .then(function (id) {
                id.updateAttributes({
                    name: newAuthorName
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static erase(id) {
        Authors.destroy({
            id: id
        })
            .then(function (deleted) {
                console.log(deleted);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


module.exports = AuthorController;