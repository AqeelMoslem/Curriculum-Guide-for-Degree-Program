const viewController = {};

viewController.index = (req, res) => {
    res.render('courses/Index', {
      courses: res.locals.data.courses,
      token: res.locals.data.token,
      program: req.user && req.user.program ? req.user.program : null
    });
};

viewController.show = (req, res) => {
  res.render('courses/Show', { course: res.locals.data.course });
};

module.exports = viewController;