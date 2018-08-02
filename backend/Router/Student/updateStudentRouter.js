const express = require('express');

//schema
const Student = require('../../Schemas/Student.js');

const router = express.Router();

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Student.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .put((req, res) => {
    console.log('REQ', req.body)
    const { id } = req.params;
    const updateInfo = req.body;
<<<<<<< HEAD:backend/Router/Student/updateStudentRouter.js
    Student.findByIdAndUpdate(id, updateInfo)
=======
    Class.findByIdAndUpdate(id, {
      $push: { users: updateInfo.users, students: updateInfo.students }
    }, { 'new': true})
>>>>>>> 56ecdf5038036926fa23fd5a2b5b5b4356ecd094:Router/Class/updateClassRouter.js
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })

module.exports = router;
