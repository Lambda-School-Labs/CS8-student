const express = require('express');
const router = express.Router();

//schema
const Student = require('../../Schemas/Student.js');

//endpoints
// This is just for quick checking
<<<<<<< HEAD:backend/Router/Student/createStudentRouter.js
router.route('/').get((req, res) => {
  Student.find({})
    .then(students => {
      if (students.length === 0) {
        res.status(404).json({ error: 'No students found!' });
      } else {
        res.status(200).json(students);
      }
    })
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

router.post('/', (req, res) => {
  const student = req.body;
  Student.create(student)
    .then(student => res.status(201).json('Saved new student'))
=======
// router.route('/').get((req, res) => {
//   Class.find({})
//     .then(classes => {
//       if (classes.length === 0) {
//         res.status(404).json({ error: 'No classes found!' });
//       } else {
//         res.status(200).json(classes);
//       }
//     })
//     .catch(error => res.status(500).json(`Error from server: ${error}`));
// });

router.post('/', (req, res) => {
  const boat = req.body;
  console.log('REQ.USER', req.user)
  console.log(boat)
  Class.create(boat)
    .then(boat => res.status(201).json('Saved new class'))
>>>>>>> 56ecdf5038036926fa23fd5a2b5b5b4356ecd094:Router/Class/createClassRouter.js
    .catch(error => res.status(500).json(`Error from server: ${error}`));
});

module.exports = router;
