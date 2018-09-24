const Model = require('../models')
const View = require('../views/authorView')

class AuthorsControllers{
    static createUsingSave(data){
        let toInput = data.split(',')
        let obj = {}
        for(let i = 0; i < toInput.length; i++){
            let col = toInput[i].split(':')
            obj[col[0]] = col[1]
        }
        // console.log(obj)
        let newAuthor = new Model.Author(obj)
        
        newAuthor.save()

    }

    static readOne(id){
        Model.Author.findAll({
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
}

module.exports = AuthorsControllers;