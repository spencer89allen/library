
module.exports = {

    addBook: (req, res) => {

        const { coverImage, headerImage, title, author, pageCount } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.add_book_to_shelf([coverImage, headerImage, title, author, pageCount]).then((response) => {
            console.log(res);
            res.status(200).send('A new book has been added')
        }).catch((err) => {
            console.log(err)
            res.status(500).send('A new book could not be added');
        })
    },

    getBooks: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_books().then((books) => {
            res.status(200).send(books)
        }).catch((err) => {
            res.status(500).send({errMessage: "Someting went wrong getting the books from the database."});
            console.log(err)
        });
    },
}