require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Users = require('../Model/Users');

const saveSuperAdmin = async (req, res) => { 
        try {
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
            res.send("User Data Saved");
        } catch (error) {
            return error;
        }
}

const saveUser = async (req, res) =>  {
    console.log("Inside Post Api")
    console.log(req.body)
    
        try {
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
            res.send("User Data Saved");
        } catch (error) {
            return error;
        }
}

const deleteUser = async (req, res) => {
    const email = req.query.email;

    try {
        const users = await Users.deleteOne({ email });
        res.status(200).json({
            users: users
        });
    } catch (error) {
        return error;
    }
}
    
const updateUserDetails = async(req, res) => {
    console.log("Inside Put Function")
    const email = req.body.email;
    console.log(req.body)
    try {
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
        res.send("User Data Updated");
    } catch (error) {
        return error;
    }
}

const updatePassword = async(req, res) => {
    console.log("Inside Put Function")
        const email = req.body.email;
        console.log(req.body)
        try {
            const update = {
                 $set: 
                    { 
                        password: req.body.password,
                    } 
                };
            const filter = { email: email };
            console.log(filter)
            await Users.updateOne(filter, update);
            res.send("User Data Updated");
        } catch (error) {
            return error;
        }
}

const getParticularUser = async(req, res) => {
    console.log("Inside Get Particular Api")
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    const hospital = req.query.hospital;
    const email = req.query.email;
    const role = req.query.post;
    console.log(role);
    try {
            const users = await Users.aggregate([
                {$match : {email : email, firstName : firstName, lastName: lastName , hospital: hospital, role : role }}
            ]);
            res.status(200).json({
                users: users
            });
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "User Not Found"})
    }
}

const getOneUser = async(req, res) => {
    console.log("Inside Get One Api")
    const email = req.query.email;

    try {
        const users = await Users.aggregate([
            {$match : {email : email }}
        ]);
        res.status(200).json({
            users: users
        });

    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "User Not Found"})
    }
}

const getUser = async(req, res) => {
    console.log("Inside Get User Api")
    try {
        const user = await Users.find();
        if (user.length > 0) {
            res.status(200).json({
                user: user
            });
        } else (
            res.status(404).send({msg: "User Not Found"})
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