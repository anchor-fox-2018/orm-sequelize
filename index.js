//const Controller = require("./controllers");
const TagController = require("./controllers/tagcontroller");
const ArticleController = require("./controllers/articlecontroller");
const AuthorController = require("./controllers/authorcontroller");
let param1 = process.argv[2];
let param2 = process.argv[3];
let param3 = process.argv[4];
let param4 = process.argv[5];
console.log(`Command is controller ${param1} method ${param2} param1 ${param3} param2 ${param4}`);
switch (param1.toLowerCase()) {
    case "article":
        switch (param2.toLowerCase()) {
            case "add":
                ArticleController.add(param3);
                break;
            case "read_one":
                ArticleController.readOne(param3);
                break;
            case "read_all":
                ArticleController.readAll();
                break;
            case "update":
                ArticleController.update(param3, param4);
                break;
            case "erase":
                ArticleController.erase(param3);
                break;
            default:
                break;
        }
        break;
    case "tag":
        switch (param2.toLowerCase()) {
            case "add":
                TagController.add(param3);
                break;
            case "read_one":
                TagController.readOne(param3);
                break;
            case "read_all":
                TagController.readAll();
                break;
            case "update":
                TagController.update(param3, param4);
                break;
            case "erase":
                TagController.erase(param3);
                break;
            default:
                break;
        }
        break;
    case "author":
        switch (param2.toLowerCase()) {
            case "add":
                AuthorController.add(param3);
                break;
            case "read_one":
                AuthorController.readOne(param3);
                break;
            case "read_all":
                AuthorController.readAll();
                break;
            case "update":
                AuthorController.update(param3, param4);
                break;
            case "erase":
                AuthorController.erase(param3);
                break;
            default:
                break;
        }
        break;
    default:

        break;
}
