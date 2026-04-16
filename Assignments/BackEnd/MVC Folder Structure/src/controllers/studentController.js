const getAllStudents = async(req, res) => {
    const students = req.body;
    res.send(students).status(200);
}

const getStudentById = async(req, res) => {
    const id = req.params.id;
}



module.exports = { getAllStudents, getStudentById };