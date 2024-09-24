exports.dashboard = async (req, res) => {
    const locals = {
      title: "Dashboard",
      description: "dashboard....",
    }
    res.render('dashboard/index', {
      locals,
      layout: '../views/layouts/dashboard'
    }); 
  }
  