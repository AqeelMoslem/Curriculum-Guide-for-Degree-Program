const apiController = {};

apiController.index = (req, res) => {
  res.json(res.locals.data.students);
};

apiController.show = (req, res) => {
  res.json(res.locals.data.student);
};

apiController.create = (req, res) => {
  res.status(201).json(res.locals.data.student);
};

apiController.update = (req, res) => {
  res.json(res.locals.data.student);
};

apiController.delete = (req, res) => {
  res.json({ deleted: true });
};

module.exports = apiController;
