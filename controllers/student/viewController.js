const viewController = {};

viewController.index = (req, res) => {
  res.render('students/Index', { students: res.locals.data.students });
};

viewController.show = (req, res) => {
  res.render('students/Show', { student: res.locals.data.student });
};

module.exports = viewController;
