module.exports = {

    getBook: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params

        dbInstance.get_book([id]).then((bookInfo => {
            res.status(200).send(bookInfo)
        })).catch((error) => {
            res.status(500).send({errMessage: "Someting went wrong getting the book Info from the database."});
            console.log(error)
        })
        
    },
}