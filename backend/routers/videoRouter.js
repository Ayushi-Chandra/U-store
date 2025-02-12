const express = require('express');
const router=express.Router();

const  Model= require('../models/videoModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    
    // async function
    new Model(req.body).save()
    .then((data) => {
        console.log(data);
        res.json(data);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})

// ':' denotes a parameter
router.get('/getbyemail/:email', (req, res) => {
    const email = req.params.email;
    console.log(email);
    Model.findOne({email : req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
})



router.get('/getbyid/:id', (req, res) => {
    
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});
router.get('/getbyuserid/:id', (req, res) => {
    
    Model.find({createdBy : req.params.id})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.delete('/deletebyid/:id', (req, res) => {
    
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});


router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.post('/authenticate', (req, res) => {
    const formdata = req.body;
    Model.findOne({email: formdata.email, password: formdata.password})
    .then((result) => {
        console.log(result);

        if(result) {
            console.log('Login Success');
            res.json(result);
        } else {
            console.log('Login Failed');
            res.status(400).json({status: 'Login Failed'});
        }

    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    })
})

module.exports=router