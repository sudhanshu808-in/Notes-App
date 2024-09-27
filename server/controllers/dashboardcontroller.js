const Note = require('../models/Notes');
const mongoose = require('mongoose');





exports.dashboard = async (req, res) => {

  let perPage = 12;
  let page = req.query.page || 1

  const locals = {
    title: "Dashboard",
    description: "dashboard....",
  }


  try {


    Note.aggregate([
      {
        $sort: {
          createdAt: 1,
        }
      },
      { $match: { user: mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ['$title', 0, 30] },
          body: { $substr: ['$body', 0, 100] },


        }
      }

    ]).skip(perPage * page - perPage)
      .limit(perPage)
      .exec((err, notes) => {
        Note.count().exec((err, count) => {
          if (err) return next(err);



          res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: '../views/layouts/dashboard',
            current: page,
            pages: Math.ceil(count / perPage)
          });
        })
      })
  } catch (error) {
    console.log(error);

  }

}
