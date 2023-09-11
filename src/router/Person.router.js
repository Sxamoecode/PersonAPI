const express = require('express');
const {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson
} = require('./Person.controller');

const personRouter = express.Router();

personRouter.use((req, res, next) => {
    switch (req.method) {
        case 'POST':
            personRouter.post('/api', createPerson);
            break;
        case 'GET':
            personRouter.get('/api/user_id', getPerson);
            break;
        case 'PUT':
            personRouter.put('/api/user_id', updatePerson);
            break;
        case 'DELETE':
            personRouter.delete('/api/user_id', deletePerson);
            break;
        default:
            break;
    }
    next();
});

module.exports = {
    personRouter
};