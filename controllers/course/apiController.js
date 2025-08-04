const apiController = {};

apiController.index = (req, res) => {
  res.json(res.locals.data.courses);
};

apiController.show = (req, res) => {
  res.json(res.locals.data.course);
};

apiController.create = (req, res) => {
  res.status(201).json(res.locals.data.course);
};

apiController.update = (req, res) => {
  res.json(res.locals.data.course);
};

apiController.delete = (req, res) => {
  res.json({ deleted: true });
};

module.exports = apiController;
