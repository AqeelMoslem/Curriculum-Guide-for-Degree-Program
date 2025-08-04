const apiController = {};

apiController.index = (req, res) => {
  res.json(res.locals.data.programs);
};

apiController.show = (req, res) => {
  res.json(res.locals.data.program);
};

apiController.create = (req, res) => {
  res.status(201).json(res.locals.data.program);
};

apiController.update = (req, res) => {
  res.json(res.locals.data.program);
};

apiController.delete = (req, res) => {
  res.json({ deleted: true });
};

module.exports = apiController;
