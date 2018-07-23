const express = require('express');
const router = express.Router();

//schema
const Class = require('../../Schemas/Class.js');

//endpoints
// This is just for quick checking
router.route('/').get((req, res) => {
  Class.find({})
    .then(classes => {
      if (classes.length === 0) {
        res.status(404).json({ error: 'No classes found!' });
      } else {
        res.status(200).json(classes);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
  const note = req.body;
  Class.create(note)
    .then(note => res.status(201).json('Saved new class'))
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
