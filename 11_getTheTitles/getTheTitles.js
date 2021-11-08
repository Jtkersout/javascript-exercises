const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(books[0])

function getTheTitles() {
    const booktitles = [];

    for (let i = 0; i < books.length; i++) {
        booktitles.push(books[i].title);
    }

 return booktitles;
}

// Do not edit below this line
module.exports = getTheTitles;
