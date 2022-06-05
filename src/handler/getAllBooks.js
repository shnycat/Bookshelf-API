const books = require('../books');

const getAllBooks = () => ({
  status: 'success',
  data:
    books.length > 0
      ? {
          books: books.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
        }
      : { books: [] },
});

module.exports = getAllBooks;
