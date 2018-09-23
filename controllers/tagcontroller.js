const Model = require("../models")
const Tags = Model.Tags;
class TagController {
    static add(tagName) {
        Tags.create({
            name: tagName
        });
    }
    static readOne(tagName) {
        Tags.findOne({
            name: tagName
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
    static readOne(id) {
        Tags.findOne({
            id: id
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
        Tags.findAll()
            .then(function (data) {
                data.forEach(element => {
                    console.log(element.dataValues);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static update(id, newTagName) {
        Tags.findOne({
            id: id
        })
            .then(function (id) {
                id.updateAttributes({
                    name: newTagName
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static erase(id) {
        Tags.destroy({
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


module.exports = TagController;