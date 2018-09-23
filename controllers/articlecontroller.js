const Model = require("../models")
const Articles = Model.Authors;
class ArticleController {
    static add(articleName) {
        Articles.create({
            name: articleName
        });
    }
    static readOne(articleName) {
        Articles.findOne({
            name: articleName
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
        Articles.findAll()
            .then(function (data) {
                data.forEach(element => {
                    console.log(element.dataValues);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static update(id, newArticleName) {
        Articles.findOne({
            id: id
        })
            .then(function (id) {
                id.updateAttributes({
                    name: newArticleName
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    static erase(id) {
        Articles.destroy({
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


module.exports = ArticleController;