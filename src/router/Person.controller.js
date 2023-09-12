const Person = require('../model/Person.model');

exports.createPerson = async function(req, res) {
    try {
        const {fullName} = req.body;

        if (!fullName || typeof fullName !== 'string') {
            return res.status(406).send('Input required name and of type string')
        }

        let findPerson = await Person.findOne({ fullName: fullName });
        if (findPerson) {
            return res.status(422).send('Name already exist');
        }

        const newPerson = new Person({fullName});
        newPerson.save()
        .then(person => res.status(201).json({
            Msg: 'Product created successfully',
            product: {
                id: person._id,
                name: person.fullName,
            }
        }))
        .catch(err => next(err));
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error, check your connection');
    };
};

exports.getPerson = async function (req, res) {
    try {
        const {user_id} = req.query;
        console.log(user_id);

        const findPerson = await Person.findOne({ _id: user_id});
        if (!findPerson) {
            return res.status(404).json({
                Msg: `Person with user_id ${user_id} not found`
            });
        };

        res.status(200).json({
            person: {
                _id: findPerson._id,
                name: findPerson.fullName
            }
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            Msg: 'Server error, pls check your connection while waiting'
        });
    };
};

exports.updatePerson = async function(req, res) {
    try {
        const {user_id} = req.query;

        const findPerson = await Person.findOne({ _id: user_id});
        if (!findPerson) {
            return res.status(404).json({
                Msg: `Person with _id ${user_id} not found`
            });
        };

        const findPrevPerson = await Person.findOne({ fullName: req.body.fullName });
        if (findPrevPerson) {
            return res.status(422).send('Name already exist');
        }

        const editName = await Person.findOneAndUpdate(
            { _id: user_id},
            req.body,
            { new: true });
        if (!editName) {
            return res.status(500).json({
                Msg: 'Server error, check your connection'
            });
        }

        return res.status(200).json({
            Msg: 'Person updated',
            Person: {
                id: editName._id,
                name: editName.fullName,
            }
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error, check your connection while waiting');
    };
};

exports.deletePerson = async function (req, res) {
    try {
        const {user_id} = req.query;

        const findPerson = await Person.findOne({ _id: user_id });
        if (!findPerson) {
            return res.status(404).json({
                Msg: `Person with user_id ${user_id} not found`
            });
        };

        const delName = await Person.findOneAndDelete({ _id: user_id });
        if (!delName) {
            return res.status(500).json({
                Msg: 'Sserver error'
            });
        }

        return res.status(200).json({
            Msg: 'Person deleted'
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error, check your connection while waiting');
    };
};
