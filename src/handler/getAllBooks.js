const books = require('../books');

const getBooks = () => ({
  status: 'success',
  data: books.length > 0 ? { books } : { books: [] },
});

module.exports = getBooks;
