const router = require('express').Router()
const db = require('../models')
const { scs, errs } = require('../msg')

router.get('/all', async function (req, res) {
  try {
    const allUsers = await db.User.findAll({ attributes: ['name', 'nanoId'] })
    if (!allUsers.length) {
      return res.json(errs.user.notFound)
    }
    res.json(allUsers)
  } catch (err) {
    res.json(errs.user.generic)
  }
})

router.get('/:id', async function (req, res) {
  try {
    // should be id from the session or token
    const prId = Number(req.params.id)
    if (Number.isNaN(prId)) {
      return res.json(errs.id.format)
    }
    const userFound = await db.User.findByPk(prId)
    if (!userFound) {
      return res.json(errs.user.notFound)
    }
    // save into a token or session instead
    res.json(scs.user.found(await userFound.toJSON()))
  } catch (err) {
    console.log(err)
    res.json(errs.id.generic)
  }
})

router.post('/', async function (req, res) {
  try {
    const { name } = req.body
    if (!name) return res.json(errs.user.notProvided)
    const newUser = await db.User.create({ name })
    res.json(scs.user.created(await newUser.toJSON()))
  } catch (err) {
    if (
      err?.name === 'SequelizeUniqueConstraintError' &&
      err?.errors[0].type === 'unique violation' &&
      err?.errors[0].path === 'name'
    ) {
      return res.json(errs.user.alreadyUsed)
    }
    if (err?.name === 'SequelizeValidationError') {
      return res.json(errs.user.validation(err.errors[0].message))
    }
    res.json(errs.user.generic)
  }
})

module.exports = router
