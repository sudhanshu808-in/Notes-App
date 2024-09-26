const Note = require('../models/Notes');
const mongoose = require('mongoose');





exports.dashboard = async (req, res) => {



    const locals = {
      title: "Dashboard",
      description: "dashboard....",
    }


try {
  const notes = await Note.find({})
  
      res.render('dashboard/index', {
        userName : req.user.firstName,
        locals,
        notes,
        layout: '../views/layouts/dashboard'
      }); 
  
} catch (error) {
  
}

  }
  