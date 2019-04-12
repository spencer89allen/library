module.exports = {

    bookInfo: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params
        console.log(id)
        dbInstance.get_book([id]).then(bookInfo => {
            res.status(200).send(bookInfo)
        }).catch((error) => {
            res.status(500).send({errMessage: "Someting went wrong getting the book Info from the database."});
            console.log(error)
        })
    },

    postChapterInfo: (req, res) => {

    },
}