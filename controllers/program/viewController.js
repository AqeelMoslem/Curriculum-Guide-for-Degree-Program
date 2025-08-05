const RESOURCE_PATH = '/courses'
const viewController = {

  index(req, res, next){
    res.render('courses/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('courses/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('courses/Edit', res.locals.data)
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

module.exports = viewController