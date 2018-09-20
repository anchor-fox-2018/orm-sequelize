const View = require('../view/view.js');
const db = require('../models/index.js');

class Controller {
  static addAuthor(firstName, lastName, religion, gender, age) {
    db.Author.create({
      first_name: firstName,
      last_name: lastName,
      religion: religion,
      gender: gender,
      age: age,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(author => {View.display('Berhasil add Author')})
    .catch(err => {View.display(err)})
  }

  static readOneAuthor(id) {
    db.Author.findOne({where:{id:id}})
    .then(author => {View.display(author)})
    .catch(err => {View.display(err)})
  }

  static readAllAuthor() {
    db.Author.findAll()
    .then(authors => {View.display(authors)})
    .catch(err => {View.display(err)})
  }

  static updateAuthor(id, column, value) {
    let temp;
    if (column === 'firstName') {
      temp = {first_name:value}
    } else if (column === 'lastName') {
      temp = {last_name:value}
    } else if (column === 'religion') {
      temp = {religion:value}
    } else if (column === 'gender') {
      temp = {gender:value}
    } else if (column === 'age') {
      temp = {age:value}
    }
    db.Author.update(temp, {where:{id:id}})
    .then(author => {View.display('Berhasil update Author')})
    .catch(err => {View.display(err)})
  }

  static deleteAuthor(id) {
    db.Author.destroy({where:{id:id}})
    .then(author => {View.display('Berhasil delete Author')})
    .catch(err => {View.display(err)})
  }

  static addArticle(title, body, authorId, tagId) {
    db.Article.create({
      title: title,
      body: body,
      authorId: authorId,
      tagId: tagId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(article => {View.display('Berhasil add Article')})
    .catch(err => {View.display(err)})
  }

  static readOneArticle(id) {
    db.Article.findOne({where:{id:id}})
    .then(article => {View.display(article)})
    .catch(err => {View.display(err)})
  }

  static readAllArticle() {
    db.Article.findAll()
    .then(articles => {View.display(articles)})
    .catch(err => {View.display(err)})
  }

  static updateArticle(id, column, value) {
    let temp;
    if (column === 'title') {
      temp = {title:value}
    } else if (column === 'body') {
      temp = {body:value}
    } else if (column === 'authorId') {
      temp = {authorId:value}
    } else if (column === 'tagId') {
      temp = {tagId:value}
    }
    db.Article.update(temp, {where:{id:id}})
    .then(article => {View.display('Berhasil update Article')})
    .catch(err => {View.display(err)})
  }

  static deleteArticle(id) {
    db.Article.destroy({where:{id:id}})
    .then(article => {View.display('Berhasil delete Article')})
    .catch(err => {View.display(err)})
  }

  static addTag(name) {
    db.Tag.create({
      name: name,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(tag => {View.display('Berhasil add Tag')})
    .catch(err => {View.display(err)})
  }

  static readOneTag(id) {
    db.Tag.findOne({where:{id:id}})
    .then(tag => {View.display(tag)})
    .catch(err => {View.display(err)})
  }

  static readAllTag() {
    db.Tag.findAll()
    .then(tags => {View.display(tags)})
    .catch(err => {View.display(err)})
  }

  static updateTag(id, column, value) {
    let temp;
    if (column === 'name') {
      temp = {name:value}
    }
    db.Tag.update(temp, {where:{id:id}})
    .then(tag => {View.display('Berhasil update Tag')})
    .catch(err => {View.display(err)})
  }

  static deleteTag(id) {
    db.Tag.destroy({where:{id:id}})
    .then(tag => {View.display('Berhasil delete Tag')})
    .catch(err => {View.display(err)})
  }

} //end class controller

module.exports = Controller
