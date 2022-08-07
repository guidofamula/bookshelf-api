const {addBookHandler} = require('./booksHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];


module.exports = routes;