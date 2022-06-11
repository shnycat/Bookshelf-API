const { nanoid } = require('nanoid');
const books = require('../books');

const addBook = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name || readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message: `Gagal menambahkan buku. ${
          !name
            ? 'Mohon isi nama buku'
            : 'readPage tidak boleh lebih besar dari pageCount'
        }`,
      })
      .code(400);
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year: year || undefined,
    author: author || undefined,
    summary: summary || undefined,
    publisher: publisher || undefined,
    pageCount: pageCount || undefined,
    readPage: readPage || undefined,
    finished: pageCount === readPage,
    reading: reading || undefined,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const bookAddedSuccessfully =
    books.filter((book) => book.id === id).length > 0;

  if (bookAddedSuccessfully) {
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201);
  }

  return h
    .response({
      status: 'error',
      message: 'Buku gagal ditambahkan',
    })
    .code(500);
};

module.exports = addBook;
