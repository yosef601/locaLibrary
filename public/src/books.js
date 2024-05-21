function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  for(let i =0; i < authors.length; i++){
    if(authors[i].id === id){
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  for(let i =0; i < books.length; i++){
    if(books[i].id === id){
      return books[i];
    }
  }
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
