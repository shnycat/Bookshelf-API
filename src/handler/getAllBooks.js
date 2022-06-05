const books = require('../books');

const getBooks = () => ({
  status: 'success',
  data:
    books.length > 0
      ? {
          id: books.id,
          name: books.name,
          publisher: books.publisher,
        }
      : { books: [] },
});

module.exports = getBooks;
