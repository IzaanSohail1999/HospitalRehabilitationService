require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Users = require('../Model/Users');

const saveSuperAdmin = async (req, res) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.hospital && req.body.departement && req.body.email && req.body.password && req.body.role) {
            const email = req.body.email;
            const users = await Users.aggregate([
                { $match: { email: email } }
            ]);
            if (users.length === 0) {
                const user = new Users({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    hospital: req.body.hospital,
                    departement: req.body.departement,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                })
                await user.save();
                res.status(200).send({ result: "User Data Saved" });
            }
            else {
                res.status(401).send({ result: "User Already Exist" });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const saveUser = async (req, res) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.hospital && req.body.departement && req.body.email && req.body.password && req.body.role) {
            const email = req.body.email;
            const users = await Users.aggregate([
                { $match: { email: email } }
            ]);
            if (users.length === 0) {
                const user = new Users({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    hospital: req.body.hospital,
                    departement: req.body.departement,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                })
                await user.save();
                res.status(200).send({ result: "User Data Saved" });
            }
            else {
                res.status(401).send({ result: "User Already Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const deleteUser = async (req, res) => {
    try {
        if (req.query.email) {

            const email = req.query.email;
            const users = await Users.deleteOne({ email });
            if (users.deletedCount === 1) {
                res.status(200).json({
                    users: users
                });
            }
            else {
                res.status(404).send({ result: 'Not Found' });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const updateUserDetails = async (req, res) => {
    try {
        console.log("Inside Put Function")
        if (req.body.firstName && req.body.lastName && req.body.hospital && req.body.departement && req.body.email && req.body.password && req.body.role) {
            const email = req.body.email;
            const users = await Users.aggregate([
                { $match: { email: email } }
            ]);
            if (users.length !== 0) {
                const update = {
                    $set:
                    {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        hospital: req.body.hospital,
                        departement: req.body.departement,
                        email: req.body.email,
                        password: req.body.password,
                        role: req.body.role
                    }
                };
                const filter = { email: email };
                console.log(filter)
                await Users.updateOne(filter, update);
                res.status(200).send({ result: "User Data Updated" });
            }
            else {
                res.status(401).send({ result: "User Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        return error;
    }
}

const updatePassword = async (req, res) => {
    console.log("Inside Put Function")
    try {
        if (req.body.password && req.body.email) {
            const email = req.body.email;
            const users = await Users.aggregate([
                { $match: { email: email } }
            ]);
            if (users.length !== 0) {
                console.log(req.body)
                const update = {
                    $set:
                    {
                        password: req.body.password,
                    }
                };
                const filter = { email: email };
                console.log(filter)
                await Users.updateOne(filter, update);
                res.status(200).send({ result: "User Password Updated" });
            } else {
                res.status(401).send({ result: "User Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const getParticularUser = async (req, res) => {
    console.log("Inside Get Particular Api")
    try {
        if (req.query.firstName && req.query.lastName && req.query.hospital && req.query.email && req.query.post) {
            const firstName = req.query.firstName;
            const lastName = req.query.lastName;
            const hospital = req.query.hospital;
            const email = req.query.email;
            const role = req.query.post;
            console.log(role);
            const users = await Users.aggregate([
                { $match: { email: email, firstName: firstName, lastName: lastName, hospital: hospital, role: role } }
            ]);
            if (users.length !== 0) {
                res.status(200).json({
                    users: users
                });
            }
            else {
                res.status(401).send({ result: "User Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "User Not Found" })
    }
}

const getOneUser = async (req, res) => {
    console.log("Inside Get One Api")
    try {
        if (req.query.email) {
            const email = req.query.email;

            const users = await Users.aggregate([
                { $match: { email: email } }
            ]);
            if (users.length !== 0) {
                res.status(200).json({
                    users: users
                });
            }
            else {
                res.status(401).send({ result: "User Doesnt Exist" });
            }
        }
        else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "User Not Found" })
    }
}

const getUser = async (req, res) => {
    console.log("Inside Get User Api")
    try {
        const user = await Users.find();
        if (user.length > 0) {
            res.status(200).json({
                user: user
            });
        } else (
            res.status(404).send({ msg: "No User Found" })
        )
    } catch (error) {
        return error;
    }
}

module.exports = {
    saveSuperAdmin,
    saveUser,
    deleteUser,
    updateUserDetails,
    updatePassword,
    getParticularUser,
    getOneUser,
    getUser
}