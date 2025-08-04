const viewController = {};

viewController.index = (req, res) => {
  res.render('programs/Index', { programs: res.locals.data.programs });
};

viewController.show = (req, res) => {
  res.render('programs/Show', { program: res.locals.data.program });
};

module.exports = viewController;
