const AuthorsControllers = require('./controllers/AuthorsControllers')
const ArticlesControllers = require('./controllers/ArticleControllers')
const TagsControllers = require('./controllers/AuthorsControllers')
let command = process.argv[2]
let table = process.argv[3]

if(command == 'add'){
    let data = process.argv[4]
    if(table == 'article'){
        ArticlesControllers.createUsingSave(data)
    } else if(table == 'author'){
        AuthorsControllers.createUsingSave(data)
    } else if(table == 'tag'){
        TagsControllers.createUsingSave(data)
    }
} else if(command == 'read_one'){
    let id = process.argv[4]
    if(table == 'article'){
        ArticlesControllers.readOne(id)
    } else if(table == 'author'){
        AuthorsControllers.readOne(id)
    } else if(table == 'tag'){
        TagsControllers.readOne(id)
    }
} else if(command == 'read_all'){
    if(table == 'article'){
        ArticlesControllers.readAll()
    } else if(table == 'author'){
        AuthorsControllers.readAll()
    } else if(table == 'tag'){
        TagsControllers.readAll()
    }
} else if(command == 'update'){
    let id = process.argv[4]
    let data = process.argv[5]
} else if(command == 'erase'){
    let id = process.argv[4]
} else if(command == undefined || command == 'help'){
    console.log(`
    here is how to use this app:
    ==============documentation============================================
    add -> add<space> table_name <space> "data yang ingin dimasukkan
    read_one -> read_one <space> table_name <space> "id"
    read_all -> read_all <space> table_name
    update -> update <space> table_name <space> "id" <space> "data terbaru"
    delete -> delete <space> table_name <space> "id" 
    =======================================================================`)
}