require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Hospitals = require('../Model/Hospitals');

const saveHospital = async (req, res) => {
    console.log("Inside Post Api")
    try {
        if (req.body.name && req.body.address && req.body.email && req.body.phone && req.body.postCode && req.body.website) {
            const email = req.body.email;
            console.log(req.body.postCode);
            const hospitals = await Hospitals.aggregate([
                { $match: { email: email } }
            ]);
            if (hospitals.length === 0) {
                const hospital = new Hospitals({
                    name: req.body.name,
                    address: req.body.address,
                    email: req.body.email,
                    phone: req.body.phone,
                    postcode: req.body.postCode,
                    website: req.body.website,
                })
                await hospital.save();
                res.status(200).send({ result: "Hospital Data Saved" });
            } else {
                res.status(401).send({ result: "Hospital Already Exist" });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        return error;
    }
}

const getHospital = async (req, res) => {
    console.log("Inside Get User Api")
    try {
        const hospital = await Hospitals.find();
        if (hospital.length > 0) {
            res.status(200).json({
                hospital: hospital
            });
        } else (
            res.status(404).send({ msg: "Hospital Not Found" })
        )
    } catch (error) {
        return error;
    }
}

const deleteHospital = async (req, res) => {
    try {
        if (req.query.email) {
            const email = req.query.email;
            const hospitals = await Hospitals.aggregate([
                { $match: { email: email } }
            ]);
            if (hospitals.length !== 0) {
                const hospitalEmail = req.query.email;
                const hospitals = await Hospitals.deleteOne({ hospitalEmail });
                res.status(200).json({
                    hospitals: hospitals
                });
            } else {
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

const updateHospitalDetails = async (req, res) => {
    console.log("Inside Put Function")
    try {
        if (req.body.name && req.body.address && req.body.email && req.body.phone && req.body.postCode && req.body.website) {
            const email = req.body.email;
            const hospitals = await Hospitals.aggregate([
                { $match: { email: email } }
            ]);
            if (hospitals.length !== 0) {
                const update = {
                    $set:
                    {
                        name: req.body.name,
                        address: req.body.address,
                        email: req.body.email,
                        phone: req.body.phone,
                        postcode: req.body.postCode,
                        website: req.body.website,
                    }
                };
                const filter = { email: email };
                await Hospitals.updateOne(filter, update);
                res.status(200).send({ result: "Hospital Data Updated"});
            } else {
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

const getParticularHospital = async (req, res) => {
    console.log("Inside Get Particular Api")
    try {
        if (req.query.name && req.query.address && req.query.email && req.query.phone && req.query.postCode && req.query.website) {
            const name = req.query.name;
            const address = req.query.address;
            const email = req.query.email;
            const phone = req.query.phone;
            const postCode = req.query.postCode;
            const website = req.query.website
            const hospitals = await Hospitals.aggregate([
                {
                    $match: {
                        name: name,
                        address: address,
                        email: email,
                        phone: phone,
                        postcode: postCode,
                        website: website
                    }
                }
            ]);
            if (hospitals.length !== 0) {

                res.status(200).json({
                    hospitals: hospitals
                });
            }
            else {
                res.status(404).send({ result: 'Not Found' });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }
    } catch (error) {
        console.log(error);
    }
}

const getOneHospital = async (req, res) => {
    console.log("Inside Get One Api")
    try {
        if (req.query.email) {
            const email = req.query.email;
            const hospitals = await Hospitals.aggregate([
                { $match: { email: email } }
            ]);
            if (hospitals.length !== 0) {
                res.status(200).json({
                    hospitals: hospitals
                });
            }
            else {
                res.status(404).send({ result: 'Not Found' });
            }
        } else {
            res.status(406).send({ result: 'Invalid Information' });
        }

    } catch (error) {
        console.log(error);
        res.status(404).send({ msg: "Hospital Not Found" })
    }
}


module.exports = {
    saveHospital,
    getHospital,
    deleteHospital,
    updateHospitalDetails,
    getParticularHospital,
    getOneHospital
}