const RESOURCE_PATH = '/programs'
const viewController = {

index  (req, res){
  const selectedProgram = req.query.program || (req.user && req.user.program);
  const selectedSubject = req.query.selectedSubject;

  res.render('courses/Index', {
    courses: res.locals.data.courses,
    token: req.query.token || res.locals.data.token,
    program: selectedProgram,
    selectedSubject: selectedSubject
  });
},

  show(req, res, next){
    res.render('courses/Show', res.locals.data)
  },
  edit(req, res, next){
   const { token, programCode } = req.query;
res.render('courses/Edit', { token, programCode });

  },
  newView(req, res, next){
    res.render('courses/New', res.locals.data)
  },
  newSelect(req, res, next){
    res.render('programs/select', res.locals.data)
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
  redirectShow(req, res, next){
     if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    }else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    } 
  }
}

    viewController.select = (req, res) => {
  res.render('courses/Select', {
    courses: res.locals.data.courses,
    token: res.locals.data.token,
    programCode: req.params.programCode,
  });
};


module.exports = viewController