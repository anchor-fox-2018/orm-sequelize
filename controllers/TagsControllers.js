const Model = require('../models')

class AuthorsControllers{
    static createUsingSave(data){
        let toInput = data.split(',')
        let obj = {}
        for(let i = 0; i < toInput.length; i++){
            let col = toInput[i].split(':')
            obj[col[0]] = col[1]
        }
        // console.log(obj)
        let newTag = new Model.Tag(obj)
        
        newTag.save()

    }
}

module.exports = TagsControllers;