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
        const dbInstance = req.app.get('db');
        const { id, number, title, notes } = req.body;

        dbInstance.add_chapter_to_book([id, number, title, notes]).then(response => {
            res.status(200).send('A new chapter summary as been added to the database')
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something went wrong adding a new chapter summary')
        })
    },

    getChapterList: (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
        
        dbInstance.get_chapter_list([id]).then(chapters => {
            res.status(200).send(chapters)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something went wrong getting the chapter list from the database')
        })
    },
}