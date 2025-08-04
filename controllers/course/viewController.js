const viewController = {};

viewController.index = (req, res) => {
  res.render('courses/Index', { courses: res.locals.data.courses });
};

viewController.show = (req, res) => {
  res.render('courses/Show', { course: res.locals.data.course });
};

module.exports = viewController;
