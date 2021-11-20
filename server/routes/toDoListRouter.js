const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    console.log('GET /toDoList');
    const sqlText = 'SELECT * FROM toDoList;';
    pool.query(sqlText)
      .then((dbResult) => {
        console.log(`${dbResult.rows.length} rows to send.`)
        res.send(dbResult.rows);
      })
      .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
      });
  });

// 

router.post('/', (req, res) => {
    console.log('POST /toDoListRouter');
    console.log('req.body:', req.body);
    const newToDO = req.body;
    const sqlText = `
      INSERT INTO toDoList
        ("task", "date", "is_complete")
      VALUES
        ($1, $2, $3)
    `;
    const sqlValues = [
      newToDO.task,
      newToDO.date,
      newToDO.is_complete
    ];
    pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        console.log('\tINSERT succeeded.');
        res.sendStatus(201);
      })
      .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
      });
  });


module.exports = router;