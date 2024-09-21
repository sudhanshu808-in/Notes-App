//   Homepage
exports.homepage = async(req,res)=>{
    const locals = {
        title : "home page",
        description : "This is the home page of our site"
    };

    res.render('index',locals);
}

//about
exports.aboutpage = async(req,res)=>{
    const locals = {
        title : "About page",
        description : "About Section"
    };

    res.render('about',locals);
}