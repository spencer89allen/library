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
            res.status(500).send('Something went wrong getting the chapter info from the database')
        })
    },

    deleteChapter : (req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_chapter([id]).then((chapters) => {
            return dbInstance.get_chapter_list([chapters[0].book_id])
        })
        .then((chapters) => {
            res.status(200).send(chapters)
        }).catch((err) => {
            res.status(409).send({errMessage: 'For some reason the chapter was not deleted.'})
                console.log(err)
        })
    },

    editChapter: (req, res) => {
        const dbInstance = req.app.get('db');
        const { chapter_id, chapter_number, chapter_title, chapter_notes } = req.body

        dbInstance.edit_chapter([chapter_id, chapter_number, chapter_title, chapter_notes]).then(chapter => {
            res.status(200).send(chapter)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Something went wrong editing the chapter info')
        })
    },
}