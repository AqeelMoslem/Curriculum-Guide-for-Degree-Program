
const viewController = {};

viewController.index = (req, res) => {
  const selectedProgram = req.query.program || (req.user && req.user.program);
  const selectedSubject = req.query.selectedSubject;

  res.render('courses/Index', {
    courses: res.locals.data.courses,
    token: res.locals.data.token,
    program: selectedProgram,
    selectedSubject: selectedSubject
  });
};

viewController.show = (req, res) => {
  res.render('courses/Show', { course: res.locals.data.course, token: res.locals.data.token });
};

viewController.new = (req, res) => {
  res.render('courses/New', { token: res.locals.data.token });
};

viewController.redirectHome = (req, res,next ) => {
  if (res.locals.data.token) {
    res.redirect(`/courses?token=${res.locals.data.token}`);
  } else {
    res.redirect('/courses/Index'); }};
    
viewController.select = (req, res) => {
  res.render('courses/Select', {
    courses: res.locals.data.courses,
    token: res.locals.data.token,
    programCode: req.params.programCode
  });
};

module.exports = viewController;