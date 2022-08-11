require('../config');
require('dotenv').config();
// const jwt = require('jsonwebtoken');
// app.use(cookieParser());
const Hospitals = require('../Model/Hospitals');

const saveHospital = async (req, res) => { 
    console.log("Inside Post Api")
    try {
        const hospital = new Hospitals({
            hospitalID: req.body.hospitalID,
            name: req.body.name,
            service: req.body.service,
            phone: req.body.phone,
            fax: req.body.fax, 
            email: req.body.email,
            website: req.body.website,
            location: req.body.location,
        })

        await hospital.save();
        res.send("Hospital Data Saved");
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
            res.status(404).send({msg: "Hospital Not Found"})
        )
    } catch (error) {
        return error;
    }
}

const deleteHospital = async (req, res) => {
    const hospitalID = req.query.hospitalID;
    try {
        const hospitals = await Hospitals.deleteOne({ hospitalID });
        res.status(200).json({
            hospitals: hospitals
        });
    } catch (error) {
        return error;
    }
}

const updateHospitalDetails = async(req, res) => {
    console.log("Inside Put Function")
    const hospitalID = req.body.hospitalID;
    console.log(hospitalID);
    try {
        const update = {
             $set: 
                {
                    hospitalID: req.body.hospitalID,
                    name: req.body.name,
                    service: req.body.service,
                    phone: req.body.phone,
                    fax: req.body.fax, 
                    email: req.body.email,
                    website: req.body.website,
                    location: req.body.location,
                } 
            };
        const filter = { hospitalID: hospitalID };
        // console.log(filter)
        await Hospitals.updateOne(filter, update);
        res.send("Hospital Data Updated");
    } catch (error) {
        return error;
    }
}

const getParticularHospital = async(req, res) => {
    console.log("Inside Get Particular Api")
    const hospitalID = req.query.hospitalID;
    const name = req.query.name;
    const location = req.query.location;
    const fax = req.query.fax;
    const email = req.query.email;
    const website = req.query.website
    try {
            const hospitals = await Hospitals.aggregate([
                {$match : {
                    hospitalID : hospitalID, 
                    name : name, 
                    location: location , 
                    fax: fax, 
                    email : email,
                    website : website
                 }}
            ]);
            res.status(200).json({
                hospitals: hospitals
            });
    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Hospital Not Found"})
    }
}

const getOneHospital = async(req, res) => {
    console.log("Inside Get One Api")
    const hospitalID = req.query.hospitalID;

    try {
        const hospitals = await Hospitals.aggregate([
            {$match : {hospitalID : hospitalID }}
        ]);
        res.status(200).json({
            hospitals: hospitals
        });

    } catch (error) {
        console.log(error);
        res.status(404).send({msg: "Hospital Not Found"})
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