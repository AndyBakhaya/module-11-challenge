const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) =>{
    const notesDB = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    res.json(notesDB);
})

router.post('/', (req, res) =>{
    const notesDB = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    const newNote = {
        title: req.body.title,
        text :req.body.text,
        id: uuidv4(),
    };
    notesDB.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDB));
    res.json(notesDB);
})

router.delete('/:id', (req, res) => {
    const notesDB = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    notesDB.splice(notesDB.indexOf(notesDB.find(note => note.id == req.params.id)),1);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDB));
    res.json(notesDB);
})

module.exports = router;