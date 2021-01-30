const Model = require('../models');
const View = require('../views/articleView')


class ArticlesController{
    static createUsingSave(data){
        let toInput = data.split(',')
        let obj = {}
        for(let i = 0; i < toInput.length; i++){
            let col = toInput[i].split(':')
            obj[col[0]] = col[1]
        }
        // console.log(obj)
        let newArticle = new Model.Articles(obj)
        
        newArticle.save()

    }

    static readOne(id){
        Model.Articles.findAll({
            where: {
                id:id
            }
        })
            .then(data => {
                View.print(data)
            })
            .catch(err => { 
                View.print(err)
            })
    }

    static readAll(){
        Model.Articles.findAll()
            .then(data => {
                View.print(data)
            })
            .catch(err => { 
                View.print(err)
            })
    }
}

module.exports = ArticlesController;
// ArticlesController.createUsingSave('title:test,body:initest,author_id:1,tag_id:1')