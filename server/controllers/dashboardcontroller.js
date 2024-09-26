const Note = require('../models/Notes');
const mongoose = require('mongoose');





exports.dashboard = async (req, res) => {

    try {
      await Note.insertMany([
        {
          user : '66f5924e0022faa209fd9791'
        }
      ])
    } catch (error) {
      
    }





    const locals = {
      title: "Dashboard",
      description: "dashboard....",
    }
    res.render('dashboard/index', {
      userName : req.user.firstName,
      locals,
      layout: '../views/layouts/dashboard'
    }); 
  }
  